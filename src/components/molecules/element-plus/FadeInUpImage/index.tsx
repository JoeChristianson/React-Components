import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInUpImage = ({ src, alt,duration }:{src:string,alt:string,duration:number}) => {
  
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<any>();

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0.5, y: 50 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration}}
    />
  );
};

export default FadeInUpImage;

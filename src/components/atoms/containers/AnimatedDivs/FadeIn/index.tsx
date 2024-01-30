"use client"
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
    children:ReactNode
    duration?:number
}

const FadeInDiv = ({ children,duration }:Props) => {
  // Setting up the intersection observer
  const { ref, inView } = useInView({
    triggerOnce: true, 
    rootMargin: '-100px 0px', 
  });

  // Animation variants
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: duration||2.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInDiv;

"use client"
import { motion } from 'framer-motion';
import React, { ReactNode, useEffect, useState } from 'react';
import FloatArrowButton from '../../../buttons/FloatArrowButton';
import styles from "./index.module.scss"

interface Props {
    slides:ReactNode[]
}

const FullScreenCarousel1 = ({ slides }:Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [onAuto,setOnAuto] = useState(true)
  const [currentTimer,setTimer] = useState<NodeJS.Timeout|null>(null)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleClick = (dir:"next"|"prev")=>{
    setOnAuto(false)
    dir==="next"?nextSlide():prevSlide()
  }

  useEffect(()=>{
    if(!onAuto&&currentTimer){
      clearInterval(currentTimer)
      return
    }
  },[onAuto])

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000); 
    setTimer(timer)
    return () => clearInterval(timer);
}, [slides.length])

  return (
    <div className={styles.carousel}>
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {slides[currentSlide]}
      </motion.div>
        <FloatArrowButton
        direction='left'
        handleClick={()=>handleClick("prev")}
        className={styles.arrow}
></FloatArrowButton>
        <FloatArrowButton
        direction='right'
        handleClick={()=>handleClick("next")}
        className={styles.arrow}
        ></FloatArrowButton>

    </div>
  );
};

export default FullScreenCarousel1;

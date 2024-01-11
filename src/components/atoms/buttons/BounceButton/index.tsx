"use client"
import React,{ ReactNode } from "react"
import styles from "./index.module.scss"
import { motion } from 'framer-motion';

type Props = {
    children:ReactNode
    className?:string
}

const BounceButton = ({children,className}: Props) => {

    const variants = {
        hover: {
          scale: 1.1,
          backgroundColor: "var(--bounce-hover-background)", // Change to your desired hover color
          color: "#ffffff", // Change text color on hover
          transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 300
          }
        }
      };
    
    const fullClassName = `${styles.button} ${className||""}`
    
    return <motion.button
    whileHover="hover"
    variants={variants}
    className={fullClassName}
    style={{
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: `var(--bounce-background)`, // Initial background color
        color: "#ffffff", // Initial text color
        outline: "none"
      }}
    >
        {children}
    </motion.button>
}

export default BounceButton
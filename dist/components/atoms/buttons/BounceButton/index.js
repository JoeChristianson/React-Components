"use client";
import React from "react";
import styles from "./index.module.scss";
import { motion } from 'framer-motion';
var BounceButton = function (_a) {
    var children = _a.children, className = _a.className;
    var variants = {
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
    var fullClassName = "".concat(styles.button, " ").concat(className || "");
    return React.createElement(motion.button, { whileHover: "hover", variants: variants, className: fullClassName, style: {
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "var(--bounce-background)", // Initial background color
            color: "#ffffff", // Initial text color
            outline: "none"
        } }, children);
};
export default BounceButton;

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import FloatArrowButton from '../../../buttons/FloatArrowButton';
import styles from "./index.module.scss";
var FullScreenCarousel1 = function (_a) {
    var slides = _a.slides;
    var _b = useState(0), currentSlide = _b[0], setCurrentSlide = _b[1];
    var nextSlide = function () {
        setCurrentSlide(function (prev) { return (prev + 1) % slides.length; });
    };
    var prevSlide = function () {
        setCurrentSlide(function (prev) { return (prev - 1 + slides.length) % slides.length; });
    };
    return (React.createElement("div", { className: styles.carousel },
        React.createElement(motion.div, { key: currentSlide, initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -100 }, transition: { duration: 0.5 } }, slides[currentSlide]),
        React.createElement(FloatArrowButton, { direction: 'left', handleClick: prevSlide }),
        React.createElement(FloatArrowButton, { direction: 'right', handleClick: nextSlide })));
};
export default FullScreenCarousel1;

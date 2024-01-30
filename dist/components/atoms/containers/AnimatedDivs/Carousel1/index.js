"use client";
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import FloatArrowButton from '../../../buttons/FloatArrowButton';
import styles from "./index.module.scss";
var FullScreenCarousel1 = function (_a) {
    var slides = _a.slides;
    var _b = useState(0), currentSlide = _b[0], setCurrentSlide = _b[1];
    var _c = useState(true), onAuto = _c[0], setOnAuto = _c[1];
    var _d = useState(null), currentTimer = _d[0], setTimer = _d[1];
    var nextSlide = function () {
        setCurrentSlide(function (prev) { return (prev + 1) % slides.length; });
    };
    var prevSlide = function () {
        setCurrentSlide(function (prev) { return (prev - 1 + slides.length) % slides.length; });
    };
    var handleClick = function (dir) {
        setOnAuto(false);
        dir === "next" ? nextSlide() : prevSlide();
    };
    useEffect(function () {
        if (!onAuto && currentTimer) {
            clearInterval(currentTimer);
            return;
        }
    }, [onAuto]);
    useEffect(function () {
        var timer = setInterval(nextSlide, 3000);
        setTimer(timer);
        return function () { return clearInterval(timer); };
    }, [slides.length]);
    return (React.createElement("div", { className: styles.carousel },
        React.createElement(motion.div, { key: currentSlide, initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -100 }, transition: { duration: 0.5 } }, slides[currentSlide]),
        React.createElement(FloatArrowButton, { direction: 'left', handleClick: function () { return handleClick("prev"); }, className: styles.arrow }),
        React.createElement(FloatArrowButton, { direction: 'right', handleClick: function () { return handleClick("next"); }, className: styles.arrow })));
};
export default FullScreenCarousel1;

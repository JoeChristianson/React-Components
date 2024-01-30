"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
var FadeInDiv = function (_a) {
    var children = _a.children, duration = _a.duration;
    // Setting up the intersection observer
    var _b = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    }), ref = _b.ref, inView = _b.inView;
    // Animation variants
    var variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (React.createElement(motion.div, { ref: ref, initial: "hidden", animate: inView ? 'visible' : 'hidden', variants: variants, transition: { duration: duration || 2.5 } }, children));
};
export default FadeInDiv;

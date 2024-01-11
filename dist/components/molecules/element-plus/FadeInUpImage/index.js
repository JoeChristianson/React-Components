import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
var FadeInUpImage = function (_a) {
    var src = _a.src, alt = _a.alt, duration = _a.duration;
    var _b = useState(false), isVisible = _b[0], setIsVisible = _b[1];
    var ref = useRef();
    var variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0.5, y: 50 },
    };
    useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.5 });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return function () {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);
    return (React.createElement(motion.img, { ref: ref, src: src, alt: alt, initial: "hidden", animate: isVisible ? "visible" : "hidden", variants: variants, transition: { duration: duration } }));
};
export default FadeInUpImage;

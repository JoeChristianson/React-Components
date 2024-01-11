"use client";
import styles from "./index.module.scss";
import React from "react";
import { motion } from "framer-motion";
import getTransforms from "./helpers/getTransforms";
var FadeInTowards = function (_a) {
    var className = _a.className, children = _a.children, direction = _a.direction, scale = _a.scale;
    var fullClassName = styles.div + " " + className || "";
    var _b = getTransforms({ direction: direction, scale: scale }), hiddenTransform = _b.hiddenTransform, visibleTransform = _b.visibleTransform;
    var variants = {
        hidden: {
            opacity: .2,
            transform: hiddenTransform
        },
        visible: {
            opacity: .9,
            transform: visibleTransform,
            transition: {
                duration: .7,
            }
        }
    };
    return React.createElement(motion.div, { className: fullClassName, style: variants.hidden, variants: variants, whileInView: "visible" }, children);
};
export default FadeInTowards;

"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import styles from "./index.module.scss";
import React from "react";
import { motion } from "framer-motion";
import makeAlt from "../../../../utils/images/makeAlt";
var ImageStele = function (_a) {
    var className = _a.className, src = _a.src, alt = _a.alt, steleBg = _a.steleBg, widthPercentage = _a.widthPercentage, heightPercentage = _a.heightPercentage, xTranslate = _a.xTranslate, delay = _a.delay, animated = _a.animated;
    var fullClassName = "".concat(styles.div, " ").concat(className);
    var steleStyle = {
        background: steleBg || "black",
        width: "".concat(widthPercentage || 80, "%"),
        height: "".concat(heightPercentage || 80, "%"),
        transform: xTranslate ? "translateX(".concat(-50 + (xTranslate || 0), "%)") : ""
    };
    var variants = {
        hidden: {
            clipPath: "inset(100% 0 0 0)"
        },
        visible: {
            clipPath: "inset(0 0 0 0)"
        }
    };
    return React.createElement("div", { className: fullClassName },
        animated && React.createElement(motion.div, { transition: { delay: delay || 0, duration: 1 }, whileInView: "visible", variants: variants, style: __assign(__assign({}, steleStyle), variants.hidden), className: styles.stele }),
        !animated && React.createElement(motion.div, { style: __assign(__assign(__assign({}, steleStyle), variants.hidden), { clipPath: "" }), className: styles.stele }),
        React.createElement("img", { src: src, alt: alt || makeAlt(src) }));
};
export default ImageStele;

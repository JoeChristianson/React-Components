"use client";
import React from "react";
import styles from "./index.module.scss";
import FadeInUpImage from "../../../../components/molecules/element-plus/FadeInUpImage";
var ImageBottomDiv = function (_a) {
    var src = _a.src, className = _a.className, alt = _a.alt;
    var duration = 1;
    var fullClassName = "".concat(styles.div, " ").concat(className || "");
    return React.createElement("div", { className: fullClassName },
        React.createElement(FadeInUpImage, { src: src, alt: alt, duration: 1 }));
};
export default ImageBottomDiv;

import styles from "./index.module.scss";
import React from "react";
var FullWidthImage = function (_a) {
    var className = _a.className, src = _a.src, alt = _a.alt;
    var fullClassName = styles.img + " " + className || "";
    return React.createElement("img", { className: fullClassName, src: src, alt: alt });
};
export default FullWidthImage;

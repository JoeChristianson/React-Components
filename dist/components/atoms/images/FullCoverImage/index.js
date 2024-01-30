import styles from "./index.module.scss";
import React from "react";
var FullCoverImage = function (_a) {
    var className = _a.className, img = _a.img, alt = _a.alt;
    var fullClassName = styles.img + " " + className || "";
    return React.createElement("img", { src: img, alt: alt, className: fullClassName });
};
export default FullCoverImage;

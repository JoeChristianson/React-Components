import FullCoverImage from "../FullCoverImage";
import styles from "./index.module.scss";
import React from "react";
var LittleCircleImage = function (_a) {
    var className = _a.className, img = _a.img, alt = _a.alt;
    var fullClassName = styles.div + " " + className || "";
    return React.createElement("div", { className: fullClassName },
        React.createElement(FullCoverImage, { img: img, alt: alt }));
};
export default LittleCircleImage;

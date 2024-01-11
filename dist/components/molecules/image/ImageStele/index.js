import styles from "./index.module.scss";
import React from "react";
var ImageStele = function (_a) {
    var className = _a.className, src = _a.src, alt = _a.alt, steleBg = _a.steleBg;
    var fullClassName = "".concat(styles.div, " ").concat(className);
    var steleStyle = {
        background: steleBg || "black"
    };
    return React.createElement("div", { className: fullClassName },
        React.createElement("div", { style: steleStyle, className: styles.stele }),
        React.createElement("img", { src: src, alt: alt }));
};
export default ImageStele;

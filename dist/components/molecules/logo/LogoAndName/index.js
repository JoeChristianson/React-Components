import styles from "./index.module.scss";
import React from "react";
var LogoAndName = function (_a) {
    var className = _a.className, children = _a.children, src = _a.src, alt = _a.alt;
    var fullClassName = styles.div + " " + className || "";
    return React.createElement("div", { className: fullClassName },
        React.createElement("img", { alt: alt, src: src }),
        children);
};
export default LogoAndName;

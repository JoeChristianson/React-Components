import styles from "./index.module.scss";
import React from "react";
var FlexCenterer2x = function (_a) {
    var className = _a.className, children = _a.children, reverse = _a.reverse;
    var fullClassName = "".concat(styles.div, " ").concat(className || "", " ").concat(reverse ? styles.reverse : "");
    return React.createElement("div", { className: fullClassName }, children);
};
export default FlexCenterer2x;

import React from "react";
import styles from "./index.module.scss";
var TopCornerRotateText = function (_a) {
    var children = _a.children, className = _a.className;
    var fullClassName = "".concat(styles.div, " ").concat(className);
    return React.createElement("div", { className: fullClassName }, children);
};
export default TopCornerRotateText;

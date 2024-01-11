import React from "react";
import styles from "./index.module.scss";
var Paragraph = function (_a) {
    var children = _a.children, className = _a.className;
    var fullClassName = "".concat(styles.p, " ").concat(className || "");
    return React.createElement("p", { className: fullClassName }, children);
};
export default Paragraph;

import React from "react";
import styles from "./index.module.scss";
var FlexBar = function (_a) {
    var className = _a.className, children = _a.children;
    var fullClassName = "".concat(styles.div, " ").concat(className);
    return React.createElement("div", { className: fullClassName }, children);
};
export default FlexBar;

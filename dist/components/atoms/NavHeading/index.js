import React from "react";
import styles from "./index.module.scss";
var NavHeading = function (_a) {
    var className = _a.className, children = _a.children;
    var fullClassName = "".concat(styles.h2, " ").concat(className);
    return React.createElement("h2", { className: fullClassName }, children);
};
export default NavHeading;

import React from "react";
import styles from "./index.module.scss";
var Heading = function (_a) {
    var children = _a.children, className = _a.className;
    var fullClassName = "".concat(styles.h1, " ").concat(className || "");
    return React.createElement("h1", { className: fullClassName }, children);
};
export default Heading;

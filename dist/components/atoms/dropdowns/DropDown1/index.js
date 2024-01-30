import styles from "./index.module.scss";
import React from "react";
var Dropdown1 = function (_a) {
    var className = _a.className, children = _a.children;
    var fullClassName = styles.div + " " + className || "";
    return React.createElement("div", { className: fullClassName }, children);
};
export default Dropdown1;

import styles from "./index.module.scss";
import React from "react";
var Section = function (_a) {
    var className = _a.className, children = _a.children;
    var fullClassName = styles.section + " " + className || "";
    return React.createElement("section", { className: fullClassName }, children);
};
export default Section;

import styles from "./index.module.scss";
import React from "react";
var Section = function (_a) {
    var className = _a.className, children = _a.children, noPadding = _a.noPadding, id = _a.id;
    var fullClassName = styles.section + " " + className || "";
    var style = {};
    if (noPadding) {
        style.padding = 0;
    }
    return React.createElement("section", { id: id || "", style: style, className: fullClassName }, children);
};
export default Section;

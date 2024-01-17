import styles from "./index.module.scss";
import React from "react";
var HeadingWithSuperscript = function (_a) {
    var className = _a.className, heading = _a.heading, superscript = _a.superscript;
    var fullClassName = styles.div + " " + className || "";
    return React.createElement("div", { className: fullClassName },
        superscript && React.createElement("h4", null, superscript),
        React.createElement("h1", null, heading));
};
export default HeadingWithSuperscript;

import styles from "./index.module.scss";
import React from "react";
var PlaceholderSection = function (_a) {
    var className = _a.className, sectionName = _a.sectionName;
    var fullClassName = styles.section + " " + className || "";
    return React.createElement("section", { className: fullClassName },
        React.createElement("h1", null, sectionName));
};
export default PlaceholderSection;

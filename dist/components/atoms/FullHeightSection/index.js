import React from "react";
import styles from "./index.module.scss";
var FullHeightSection = function (_a) {
    var children = _a.children, className = _a.className;
    var fullClassName = "".concat(styles.section, " ").concat(className || "");
    return React.createElement("section", { className: fullClassName },
        React.createElement("h2", null, "Heyo"),
        children);
};
export default FullHeightSection;

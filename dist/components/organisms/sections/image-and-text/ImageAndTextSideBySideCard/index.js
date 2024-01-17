import styles from "./index.module.scss";
import React from "react";
var ImageAndTextSideBySideCard = function (_a) {
    var className = _a.className, src = _a.src, alt = _a.alt, children = _a.children;
    var fullClassName = styles.section + " " + className || "";
    return React.createElement("section", { className: fullClassName },
        React.createElement("h1", null, "Here we are side by side"));
};
export default ImageAndTextSideBySideCard;

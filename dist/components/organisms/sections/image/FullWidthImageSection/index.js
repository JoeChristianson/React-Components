import React from "react";
import styles from "./index.module.scss";
import bgImage from "../../../../../utils/images/bgImage";
var FullWidthImageSection = function (_a) {
    var src = _a.src, alt = _a.alt, className = _a.className;
    var fullClassName = "".concat(styles.section, " ").concat(className || "");
    var style = {
        backgroundImage: bgImage(src)
    };
    return React.createElement("section", { style: style, className: fullClassName });
};
export default FullWidthImageSection;

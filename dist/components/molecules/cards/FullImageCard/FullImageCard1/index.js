import makeAlt from "../../../../../utils/images/makeAlt";
import TopCornerRotateText from "../../../../../components/atoms/containers/rotators/text/TopCornerRotateText";
import bgImage from "../../../../../utils/images/bgImage";
import styles from "./index.module.scss";
import React from "react";
var FullImageCard1 = function (_a) {
    var alt = _a.alt, image = _a.image, heading = _a.heading, subheading = _a.subheading, className = _a.className;
    var fullClassName = "".concat(styles.div, " ").concat(className || "");
    var style = {
        backgroundImage: bgImage(image)
    };
    return React.createElement("div", { role: "img", "aria-label": alt || makeAlt(image), className: fullClassName },
        React.createElement("div", { className: styles.img, style: style }),
        React.createElement(TopCornerRotateText, { className: styles.text },
            React.createElement("h3", null, heading),
            React.createElement("h4", null, subheading)));
};
export default FullImageCard1;

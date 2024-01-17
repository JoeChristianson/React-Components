import FullWidthImage from "../../../../../components/atoms/images/FullWidthImage";
import FlexCenterer2x from "../../../../atoms/containers/FlexCenterer";
import styles from "./index.module.scss";
import React from "react";
var ImageAndTextSideBySide = function (_a) {
    var className = _a.className, src = _a.src, alt = _a.alt, children = _a.children, reverse = _a.reverse, backboxBg = _a.backboxBg;
    var fullClassName = "".concat(styles.section, " ").concat(className || "");
    return React.createElement("section", { className: fullClassName },
        React.createElement(FlexCenterer2x, { reverse: reverse },
            React.createElement("div", null,
                React.createElement(FullWidthImage, { src: src, alt: alt })),
            React.createElement("div", { className: styles.right }, children)));
};
export default ImageAndTextSideBySide;

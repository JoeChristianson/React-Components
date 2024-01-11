import styles from "./index.module.scss";
import React from "react";
var LightBoldHeading = function (_a) {
    var className = _a.className, lightHeading = _a.lightHeading, boldHeading = _a.boldHeading;
    var fullClassName = "".concat(styles.div, " ").concat(className);
    return React.createElement("div", { className: fullClassName },
        React.createElement("h3", null, lightHeading),
        React.createElement("h2", null, boldHeading));
};
export default LightBoldHeading;

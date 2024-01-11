import React from "react";
import Heading from "../../../atoms/Heading";
import styles from "./index.module.scss";
var BoldLightHeading = function (_a) {
    var boldHeading = _a.boldHeading, lightHeading = _a.lightHeading;
    return React.createElement(React.Fragment, null,
        React.createElement(Heading, { className: styles.bold }, boldHeading),
        React.createElement(Heading, { className: styles.light }, lightHeading));
};
export default BoldLightHeading;

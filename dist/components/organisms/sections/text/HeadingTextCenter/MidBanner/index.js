import Section from "../../../../../../components/atoms/section/Section";
import Heading from "../../../../../../components/atoms/Heading";
import styles from "./index.module.scss";
import React from "react";
import FadeInDiv from "../../../../../atoms/containers/AnimatedDivs/FadeIn";
var d = {
    heading: "We make it. We serve it. What more is there to it really?"
};
var MidBanner = function (_a) {
    var className = _a.className, children = _a.children;
    var fullClassName = styles.section + " " + className || "";
    return React.createElement(Section, { className: fullClassName },
        React.createElement(FadeInDiv, null,
            React.createElement(Heading, { className: styles.heading }, children || d.heading)));
};
export default MidBanner;

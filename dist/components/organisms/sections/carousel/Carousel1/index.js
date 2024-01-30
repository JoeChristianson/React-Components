import Carousel from "../../../../atoms/containers/AnimatedDivs/Carousel1";
import styles from "./index.module.scss";
import React from "react";
import Section from "../../../../../components/atoms/section/Section";
var Carousel1 = function (_a) {
    var className = _a.className, children = _a.children;
    var fullClassName = styles.section + " " + className || "";
    return React.createElement(Section, { noPadding: true, className: fullClassName },
        React.createElement(Carousel, { slides: children }));
};
export default Carousel1;

import SideBySide from "../../../../../components/atoms/containers/SideBySide";
import styles from "./index.module.scss";
import React from "react";
import ImageStele from "../../../../../components/molecules/image/ImageStele";
import LightBoldHeading from "../../../../../components/molecules/element-plus/LightBoldHeading";
import ParagraphSplitter from "../../../../../components/molecules/element-plus/ParagraphSplitter";
import FadeInTowards from "../../../../../components/atoms/containers/AnimatedDivs/FadeInTowards";
var d = { className: "",
    img: "/images/about/image1.png",
    alt: "",
    smallHeading: "",
    bigHeading: "Glamour Grove",
    text: "",
    steleBg: "#eeddff" };
var About1 = function (_a) {
    var className = _a.className, img = _a.img, alt = _a.alt, smallHeading = _a.smallHeading, bigHeading = _a.bigHeading, text = _a.text, steleBg = _a.steleBg;
    var fullClassName = styles.section + " " + className || "";
    return React.createElement("section", { className: fullClassName },
        React.createElement(SideBySide, { className: styles['side-by-side'] },
            React.createElement(React.Fragment, null,
                React.createElement(FadeInTowards, { className: styles.left },
                    React.createElement(ImageStele, { src: img || d.img, alt: alt || d.alt, steleBg: steleBg, className: styles.stele })),
                React.createElement(FadeInTowards, { direction: "down", className: styles.right },
                    React.createElement(LightBoldHeading, { lightHeading: smallHeading || "Our Story", boldHeading: bigHeading || "Our Company" }),
                    React.createElement("div", { className: styles.ps },
                        React.createElement(ParagraphSplitter, { text: text || d.text }))))));
};
export default About1;

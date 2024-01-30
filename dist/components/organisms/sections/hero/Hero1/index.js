import React from "react";
import styles from "./index.module.scss";
import SideBySide from "../../../../atoms/containers/SideBySide";
import FullHeightSection from "../../../../atoms/FullHeightSection";
import BoldLightHeading from "../../../../molecules/element-plus/BoldLightHeading";
import PaddedDiv from "../../../../atoms/containers/PaddedDiv";
import ParagraphSplitter from "../../../../molecules/element-plus/ParagraphSplitter";
import ImageBottomDiv from "../../../../molecules/image/ImageBottomDiv";
import BounceButton from "../../../../atoms/buttons/BounceButton";
import makeAlt from "../../../../../utils/images/makeAlt";
// boldHeading="Beauty"
// lightHeading="Elegance"
// paragraph="We believe in the art of beauty. Every client is special, and our aim is to make you feel your absolute best. "
// image="/images/hero-figure.png"
var d = { boldHeading: "Beauty", lightHeading: "Elegance",
    paragraph: "We believe in the art of beauty. Every client is special, and our aim is to make you feel your absolute best. ", image: "/images/hero-figure.png" };
var Hero1 = function (_a) {
    var boldHeading = _a.boldHeading, lightHeading = _a.lightHeading, paragraph = _a.paragraph, className = _a.className, image = _a.image, ctaHref = _a.ctaHref, imageAlt = _a.imageAlt;
    var fullClassName = "".concat(styles.section, " ").concat(className || "");
    return React.createElement(FullHeightSection, { className: fullClassName },
        React.createElement(SideBySide, null,
            React.createElement(PaddedDiv, { className: styles.left },
                React.createElement("div", null,
                    React.createElement(BoldLightHeading, { boldHeading: boldHeading || d.boldHeading, lightHeading: lightHeading || d.lightHeading })),
                React.createElement("div", { className: styles['paragraph-cta'] },
                    React.createElement(ParagraphSplitter, { text: paragraph || d.paragraph }),
                    React.createElement("div", { className: styles.cta },
                        React.createElement("a", { href: ctaHref || "/contact" },
                            React.createElement(BounceButton, { className: styles.box },
                                React.createElement("h2", null, "Book Now")))))),
            React.createElement(ImageBottomDiv, { className: styles["image-cont"], src: image || d.image, alt: imageAlt || makeAlt(image || d.image) })));
};
export default Hero1;

import styles from "./index.module.scss";
import React from "react";
import ParagraphSplitter from "../../../../components/molecules/element-plus/ParagraphSplitter";
import SideBySide from "../../../../components/atoms/containers/SideBySide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import FadeInTowards from "../../../../components/atoms/containers/AnimatedDivs/FadeInTowards";
import makeAlt from "../../../../utils/images/makeAlt";
var Testimonial1 = function (_a) {
    var className = _a.className, testimonial = _a.testimonial, reverse = _a.reverse;
    var fullClassName = "".concat(styles.article, " ").concat(className || "", " ").concat(reverse && styles.reverse);
    var img = testimonial.img, alt = testimonial.alt, name = testimonial.name, quote = testimonial.quote, title = testimonial.title;
    return React.createElement("article", { className: fullClassName },
        React.createElement(SideBySide, { className: styles['side-by-side'] },
            React.createElement(FadeInTowards, { className: styles.left, direction: reverse ? "right" : "left" },
                React.createElement("img", { src: img, alt: alt || makeAlt(img) })),
            React.createElement(FadeInTowards, { className: styles.right, direction: "up" },
                React.createElement("div", { className: styles['quote-sign'] },
                    React.createElement(FontAwesomeIcon, { icon: faQuoteLeft, size: "lg" })),
                React.createElement("h3", null, title),
                React.createElement("h2", null, name),
                React.createElement(ParagraphSplitter, { text: quote }))));
};
export default Testimonial1;

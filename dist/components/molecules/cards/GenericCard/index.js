import styles from "./index.module.scss";
import React from "react";
import FullWidthImage from "../../../../components/atoms/images/FullWidthImage";
import makeAlt from "../../../../utils/images/makeAlt";
import ParagraphSplitter from "../../../../components/molecules/element-plus/ParagraphSplitter";
var GenericCard = function (_a) {
    var className = _a.className, card = _a.card, imgStyle = _a.imgStyle;
    var fullClassName = styles.article + " " + className || "";
    var img = card.img, alt = card.alt, heading = card.heading, subheading = card.subheading, text = card.text, links = card.links;
    return React.createElement("article", { className: fullClassName },
        img && React.createElement("header", { style: imgStyle },
            React.createElement(FullWidthImage, { src: img, alt: alt || makeAlt(img) })),
        React.createElement("main", null,
            heading && React.createElement("h3", null, heading),
            subheading && React.createElement("h4", null, subheading),
            text && React.createElement(ParagraphSplitter, { text: text }),
            links && React.createElement("footer", null, links === null || links === void 0 ? void 0 : links.map(function (link, index) {
                var href = link.href, text = link.text;
                return React.createElement("a", { href: href, key: index }, text);
            }))));
};
export default GenericCard;

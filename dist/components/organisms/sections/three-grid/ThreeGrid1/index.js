import FullImageCard1 from "../../../../molecules/cards/FullImageCard/FullImageCard1";
import ThreeGrid from "../../../../atoms/containers/ThreeGrid";
import styles from "./index.module.scss";
import React from "react";
var ThreeGrid1 = function (_a) {
    var cards = _a.cards, className = _a.className;
    var fullClassName = "".concat(styles.section, " ").concat(className || "");
    return React.createElement(ThreeGrid, { className: fullClassName }, cards.map(function (card, index) {
        var image = card.image, alt = card.alt, heading = card.heading, subheading = card.subheading;
        return React.createElement(FullImageCard1, { image: image, key: index, alt: alt, heading: heading, subheading: subheading });
    }));
};
export default ThreeGrid1;

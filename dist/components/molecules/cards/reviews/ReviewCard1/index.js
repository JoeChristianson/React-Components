import styles from "./index.module.scss";
import React from "react";
import LittleCircleImage from "../../../../../components/atoms/images/LittleCircleImage";
import makeAlt from "../../../../../utils/images/makeAlt";
import ReviewPlatformIcon from "../../../../../components/atoms/icons/branded/ReviewPlatform";
import BoxBorderCard from "../../../../../components/atoms/containers/cards/BoxBorderCard";
import ParagraphSplitter from "../../../../../components/molecules/element-plus/ParagraphSplitter";
import Stars from "../../../../../components/atoms/icons/branded/Stars";
var ReviewCard1 = function (_a) {
    var className = _a.className, review = _a.review;
    var fullClassName = styles.article + " " + className || "";
    var name = review.name, img = review.img, alt = review.alt, reviewSource = review.reviewSource, text = review.text, stars = review.stars;
    return React.createElement(BoxBorderCard, { className: fullClassName },
        React.createElement("header", null,
            React.createElement("div", { className: styles.left },
                React.createElement(LittleCircleImage, { img: img, alt: alt || makeAlt(img) }),
                React.createElement("h4", null, name)),
            React.createElement(ReviewPlatformIcon, { platform: reviewSource })),
        React.createElement("main", null,
            React.createElement(Stars, { number: stars }),
            React.createElement(ParagraphSplitter, { text: text })),
        React.createElement("footer", null));
};
export default ReviewCard1;

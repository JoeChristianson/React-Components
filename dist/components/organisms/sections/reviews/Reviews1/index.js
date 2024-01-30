import ParagraphSplitter from "../../../../../components/molecules/element-plus/ParagraphSplitter";
import Heading from "../../../../../components/atoms/Heading";
import Section from "../../../../../components/atoms/section/Section";
import ReviewCard1 from "../../../../../components/molecules/cards/reviews/ReviewCard1";
import defaultReviews from "./defaultReviews";
import styles from "./index.module.scss";
import React from "react";
var d = {
    reviews: defaultReviews,
    heading: "REVIEWS",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam nisi repellendus doloribus adipisci corrupti atque nihil totam omnis velit, quia iure deserunt beatae ipsum rerum blanditiis dicta deleniti ab?"
};
var Reviews1 = function (_a) {
    var className = _a.className, reviews = _a.reviews, heading = _a.heading, text = _a.text;
    var fullClassName = styles.section + " " + className || "";
    return React.createElement(Section, { className: fullClassName },
        React.createElement(Heading, { className: styles.heading }, heading || d.heading),
        React.createElement("div", { className: styles.text },
            React.createElement(ParagraphSplitter, { text: text || d.text })),
        React.createElement("div", { className: styles['reviews'] }, (reviews || d.reviews).map(function (review, index) {
            return React.createElement(ReviewCard1, { review: review, key: index });
        })));
};
export default Reviews1;

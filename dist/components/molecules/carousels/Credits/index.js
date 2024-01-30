"use client";
import defaultCreditCards from "./defaultCreditCards";
import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import Anchor1 from "../../../../components/atoms/anchors/Anchor1";
var d = {
    creditCards: defaultCreditCards
};
var Credits = function (_a) {
    var className = _a.className, creditCards = _a.creditCards, cardIndexUseState = _a.cardIndexUseState;
    var fullClassName = styles.section + " " + className || "";
    var _b = cardIndexUseState || useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var cardsArray = creditCards || d.creditCards;
    useEffect(function () {
        var interval = setInterval(function () { return setCurrentIndex((currentIndex + 1) % cardsArray.length); }, 4000);
        return function () { return clearInterval(interval); };
    }, [currentIndex]);
    var currentCard = cardsArray[currentIndex];
    return React.createElement("section", { className: fullClassName }, currentCard.map(function (credit, index) {
        var top = credit.top, bottom = credit.bottom, href = credit.href;
        return React.createElement("div", { className: styles.credit },
            React.createElement(Anchor1, { href: href, targetBlank: true },
                React.createElement("h4", null, top),
                React.createElement("h3", null, bottom)));
    }));
};
export default Credits;

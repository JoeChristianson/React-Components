import FullStar from "./FullStar";
import HalfStar from "./HalfStar";
import getStarsArray from "./getStarsArray";
import styles from "./index.module.scss";
import React from "react";
var Stars = function (_a) {
    var className = _a.className, number = _a.number;
    var fullClassName = styles.div + " " + className || "";
    var starsArray = getStarsArray(number);
    return React.createElement("div", { className: fullClassName }, starsArray.map(function (star, index) {
        if (star === "half") {
            return React.createElement(HalfStar, { key: index });
        }
        else {
            return React.createElement(FullStar, { key: index });
        }
    }));
};
export default Stars;

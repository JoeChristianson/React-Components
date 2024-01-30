import styles from "./index.module.scss";
import React from "react";
import Section from "../../../../../components/atoms/section/Section";
import MapGoogle from "../../../../../components/molecules/third-party/MapGoogle";
import Hours1 from "../../../../../components/molecules/hours/Hours1";
var d = {
    coordinates: {
        lat: 20,
        lng: 50,
        zoom: 8
    }
};
var Location1 = function (_a) {
    var className = _a.className, coordinates = _a.coordinates, apiKey = _a.apiKey;
    var fullClassName = styles.section + " " + className || "";
    var containerStyle = {
        height: "100%",
        width: "100%"
    };
    return React.createElement(Section, { className: fullClassName },
        React.createElement("div", { className: styles.right },
            React.createElement("div", { className: styles.top }),
            React.createElement("div", { className: styles.bottom }),
            React.createElement(Hours1, null)),
        React.createElement("div", { className: styles.left },
            React.createElement(MapGoogle, { containerStyle: containerStyle, className: styles.map, apiKey: apiKey, coordinates: coordinates || d.coordinates })));
};
export default Location1;

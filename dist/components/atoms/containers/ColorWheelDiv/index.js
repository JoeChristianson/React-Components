import styles from "./index.module.scss";
import React from "react";
var ColorWheelDiv = function (_a) {
    var className = _a.className, saturation = _a.saturation, light = _a.light, steps = _a.steps, currentIndex = _a.currentIndex, children = _a.children;
    var fullClassName = styles.div + " " + className || "";
    var cSaturation = saturation ? "".concat(saturation, "%") : "100%";
    var cLightness = light ? "".concat(light, "%") : "10%";
    var style = { background: "hsl(".concat(steps[currentIndex], ", ").concat(cSaturation, ", ").concat(cLightness, ")") };
    return React.createElement("div", { style: style, className: fullClassName }, children);
};
export default ColorWheelDiv;

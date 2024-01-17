"use client";
import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
var FormInput = function (_a) {
    var className = _a.className, formInput = _a.formInput, handleInputChange = _a.handleInputChange, side = _a.side;
    var label = formInput.label, name = formInput.name, type = formInput.type, placeholder = formInput.placeholder, width = formInput.width;
    var _b = useState(""), value = _b[0], setValue = _b[1];
    var isHalf = width === 1;
    var fullClassName = "".concat(styles.div, " ").concat(className || "", " ").concat(isHalf ? styles.half : "");
    console.log({ fullClassName: fullClassName });
    useEffect(function () {
        handleInputChange({ value: value, name: name });
    }, [value]);
    var style = {
        paddingRight: side === "left" ? "10px" : 0,
        paddingLeft: side === "right" ? "10px" : 0,
    };
    if (type === "textarea") {
        return React.createElement("div", { style: style, className: fullClassName },
            label && React.createElement("label", null, label),
            React.createElement("textarea", { placeholder: placeholder || "", value: value, onChange: function (e) { return setValue(e.target.value); } }));
    }
    return React.createElement("div", { style: style, className: fullClassName },
        label && React.createElement("label", null, label),
        React.createElement("input", { placeholder: placeholder || "", value: value, onChange: function (e) { return setValue(e.target.value); }, type: type || "text" }));
};
export default FormInput;

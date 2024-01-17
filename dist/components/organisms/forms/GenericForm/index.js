"use client";
import FadeInBoxButton from "../../../../components/atoms/buttons/FadeInBox";
import FormInput from "../../../../components/atoms/FormInput";
import getSidesArray from "./getSidesArray";
import styles from "./index.module.scss";
import React from "react";
var GenericForm = function (_a) {
    var className = _a.className, inputs = _a.inputs;
    var fullClassName = styles.form + " " + className || "";
    var handleInputChange = function (_a) {
        var value = _a.value, name = _a.name;
    };
    var handleClick = function () {
    };
    var sidesArray = getSidesArray({ inputs: inputs });
    return React.createElement("form", { className: fullClassName },
        inputs.map(function (input, index) {
            return React.createElement(FormInput, { key: index, formInput: input, handleInputChange: handleInputChange, side: sidesArray[index] });
        }),
        React.createElement("div", { className: styles['submit-cont'] },
            React.createElement(FadeInBoxButton, { className: styles.submit, handleClick: handleClick },
                React.createElement("h3", null, "Submit"))));
};
export default GenericForm;

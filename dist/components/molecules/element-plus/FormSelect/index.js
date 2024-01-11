var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import styles from "./index.module.scss";
import React from "react";
var FormSelect = function (_a) {
    var className = _a.className, options = _a.options, name = _a.name, formValues = _a.formValues, setFormValues = _a.setFormValues;
    var fullClassName = styles.div + " " + className || "";
    var handleChange = function (e) {
        var value = e.target.value;
        var newFormValues = __assign({}, formValues);
        newFormValues[name] = value;
        setFormValues(newFormValues);
    };
    return React.createElement("div", { className: fullClassName },
        React.createElement("select", { onChange: handleChange, value: formValues[name] }, options.map(function (option, index) {
            return React.createElement("option", { key: index }, option);
        })));
};
export default FormSelect;

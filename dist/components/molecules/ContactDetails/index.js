import styles from "./index.module.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getContactDetailIcon from "../../../utils/contact/getContactDetailItem";
import makeArrayFromObject from "../../../utils/array/makeArrayFromObject";
var d = {
    details: {
        "Telephone": "701 318 4338",
        "Location": "Fargo, North Dakota"
    }
};
var ContactDetails = function (_a) {
    var className = _a.className, details = _a.details;
    var fullClassName = styles.div + " " + className || "";
    var currentDetails = details || d.details;
    var arr = makeArrayFromObject({ object: currentDetails });
    return React.createElement("div", { className: fullClassName }, arr.map(function (pair, index) {
        var _a = pair, key = _a.key, value = _a.value;
        return React.createElement("div", { className: styles.card },
            React.createElement("div", { className: styles.icon },
                React.createElement(FontAwesomeIcon, { icon: getContactDetailIcon(key) })),
            React.createElement("p", null, value));
    }));
};
export default ContactDetails;

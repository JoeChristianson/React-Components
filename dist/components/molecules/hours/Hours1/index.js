import styles from "./index.module.scss";
import React from "react";
var d = {
    hours: {
        sunday: {
            open: "2:00 PM",
            close: "12:00 AM"
        },
        monday: {
            open: "2:00 PM",
            close: "12:00 AM"
        },
        tuesday: {
            open: "2:00 PM",
            close: "12:00 AM"
        },
        wednesday: {
            open: "2:00 PM",
            close: "12:00 AM"
        },
        thursday: {
            open: "2:00 PM",
            close: "12:00 AM"
        },
        friday: {
            open: "2:00 PM",
            close: "12:00 AM"
        },
        saturday: "closed"
    }
};
var Hours1 = function (_a) {
    var className = _a.className, hours = _a.hours;
    var fullClassName = styles.div + " " + className || "";
    return React.createElement("div", { className: fullClassName }, "Hours Here");
};
export default Hours1;

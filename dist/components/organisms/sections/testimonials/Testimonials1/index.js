import LightBoldHeading from "../../../../../components/molecules/element-plus/LightBoldHeading";
import styles from "./index.module.scss";
import React from "react";
import Testimonial1 from "../../../../../components/molecules/testimonial/Testimonial1";
var Testimonials1 = function (_a) {
    var className = _a.className, testimonials = _a.testimonials;
    var fullClassName = styles.section + " " + className || "";
    return React.createElement("section", { className: fullClassName },
        React.createElement(LightBoldHeading, { lightHeading: "Our Client", boldHeading: "Testimonials", className: styles['light-bold'] }),
        React.createElement("div", { className: styles.testimonials }, testimonials.map(function (testimonial, index) {
            return React.createElement(Testimonial1, { testimonial: testimonial, key: index, reverse: (index % 2) ? true : false });
        })));
};
export default Testimonials1;

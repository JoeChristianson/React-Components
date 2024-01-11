"use client";
import FormTextarea from "../../../../../components/molecules/element-plus/FormTextArea";
import FormInput from "../../../../../components/molecules/element-plus/FormInput";
import FormSelect from "../../../../../components/molecules/element-plus/FormSelect";
import LightBoldHeading from "../../../../../components/molecules/element-plus/LightBoldHeading";
import styles from "./index.module.scss";
import React, { useState } from "react";
import FadeInBox from "../../../../../components/atoms/buttons/FadeInBox";
var AppointmentForm1 = function (_a) {
    var className = _a.className, availableServices = _a.availableServices;
    var initialState = {
        fullName: "",
        time: "",
        service: "",
        phone: "",
        note: ""
    };
    var fullClassName = "".concat(styles.div, " ").concat(className);
    var _b = useState(initialState), formValues = _b[0], setFormValues = _b[1];
    var handleSubmit = function () {
    };
    return React.createElement("div", { className: fullClassName },
        React.createElement(LightBoldHeading, { lightHeading: "Quick Booking", boldHeading: "Appointment" }),
        React.createElement("form", { className: styles.form },
            React.createElement(FormInput, { formValues: formValues, setFormValues: setFormValues, name: "fullName", label: "Full Name" }),
            React.createElement(FormInput, { formValues: formValues, setFormValues: setFormValues, name: "time", label: "Time" }),
            React.createElement(FormSelect, { formValues: formValues, setFormValues: setFormValues, options: availableServices, name: "services" }),
            React.createElement(FormInput, { formValues: formValues, setFormValues: setFormValues, name: "phone", label: "Phone" }),
            React.createElement(FormTextarea, { formValues: formValues, setFormValues: setFormValues, name: "note", className: styles['textarea-cont'], label: "Note" }),
            React.createElement(FadeInBox, { handleClick: handleSubmit },
                React.createElement("h4", null, "SEND"))));
};
export default AppointmentForm1;

import SideBySide from "../../../../../components/atoms/containers/SideBySide";
import Section from "../../../../../components/atoms/section/Section";
import styles from "./index.module.scss";
import React from "react";
import GenericForm from "../../../../../components/organisms/forms/GenericForm";
import ContactDetails from "../../../../../components/molecules/ContactDetails";
var d = {
    detailsOrder: ["Telephone", "Email", "Location"],
    inputs: [
        { name: "name",
            label: "Name"
        },
        {
            name: "email",
            label: "Email",
            type: "email"
        },
        {
            name: "message",
            label: "Message",
            type: "textarea"
        }
    ]
};
var ContactFormAndDetails = function (_a) {
    var className = _a.className, handleSubmit = _a.handleSubmit, header = _a.header, footer = _a.footer, detailsOrder = _a.detailsOrder, inputs = _a.inputs;
    var fullClassName = styles.section + " " + className || "";
    var currentDetailsOrder = detailsOrder || d.detailsOrder;
    return React.createElement(Section, { id: "contact", className: fullClassName },
        header,
        React.createElement(SideBySide, { className: styles['side-by-side'] },
            React.createElement("div", null,
                React.createElement(ContactDetails, null)),
            React.createElement("div", null,
                React.createElement(GenericForm, { inputs: inputs || d.inputs }))),
        footer);
};
export default ContactFormAndDetails;

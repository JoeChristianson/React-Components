import FlexCenterer2x from "../../../../../../components/atoms/containers/FlexCenterer";
import styles from "./index.module.scss";
import React from "react";
import MapGoogle from "../../../../../../components/molecules/third-party/MapGoogle";
import Section from "../../../../../../components/atoms/section/Section";
import GenericForm from "../../../../../../components/organisms/forms/GenericForm";
import defaultFormInputs from "./defaultFormInputs";
import Heading from "../../../../../../components/atoms/Heading";
var ContactWithMap1 = function (_a) {
    var className = _a.className, coordinates = _a.coordinates, googleMapsAPIKey = _a.googleMapsAPIKey, customFormInputs = _a.customFormInputs;
    var fullClassName = styles.section + " " + className || "";
    var formInputs = customFormInputs || defaultFormInputs;
    return React.createElement(Section, { className: fullClassName },
        React.createElement(FlexCenterer2x, { className: styles.centerer },
            React.createElement(MapGoogle, { coordinates: coordinates, apiKey: googleMapsAPIKey }),
            React.createElement("div", { className: styles.left },
                React.createElement(Heading, null, "GET IN TOUCH"),
                React.createElement(GenericForm, { inputs: formInputs }))));
};
export default ContactWithMap1;

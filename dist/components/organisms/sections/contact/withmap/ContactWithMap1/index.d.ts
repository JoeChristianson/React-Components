import React from "react";
import Coordinates from "../../../../../../types/Coordinates";
import FormInput from "../../../../../../types/FormInput";
type Props = {
    className?: string;
    coordinates: Coordinates;
    googleMapsAPIKey: string;
    customFormInputs?: FormInput[];
};
declare const ContactWithMap1: ({ className, coordinates, googleMapsAPIKey, customFormInputs }: Props) => React.JSX.Element;
export default ContactWithMap1;

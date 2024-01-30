import HoursType from "../../../../../types/HoursType";
import ContactDetailsType from "../../../../../types/ContactDetailsType";
import Coordinates from "../../../../../types/Coordinates";
import React from "react";
type Props = {
    className?: string;
    coordinates?: Coordinates;
    contactDetails?: ContactDetailsType;
    hours?: HoursType;
    apiKey?: string;
};
declare const Location1: ({ className, coordinates, apiKey }: Props) => React.JSX.Element;
export default Location1;

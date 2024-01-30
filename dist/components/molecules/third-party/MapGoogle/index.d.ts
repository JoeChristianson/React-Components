import Coordinates from "types/Coordinates";
import React from "react";
type Props = {
    className?: string;
    coordinates: Coordinates;
    apiKey?: string;
    containerStyle?: any;
};
declare const MapGoogle: ({ className, coordinates, apiKey, containerStyle }: Props) => React.JSX.Element;
export default MapGoogle;

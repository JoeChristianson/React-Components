import Coordinates from "types/Coordinates";
import React from "react";
type Props = {
    className?: string;
    coordinates: Coordinates;
    apiKey?: string;
};
declare const MapGoogle: ({ className, coordinates, apiKey }: Props) => React.JSX.Element;
export default MapGoogle;

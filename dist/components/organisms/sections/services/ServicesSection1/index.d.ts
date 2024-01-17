import ServicesType from "../../../../../types/services/ServicesType";
import React from "react";
type Props = {
    className?: string;
    services: ServicesType;
    overheading?: string;
    category: string;
    img: string;
    alt: string;
    reverse?: boolean;
};
declare const ServicesSection1: ({ reverse, className, services, category, overheading, img, alt }: Props) => React.JSX.Element;
export default ServicesSection1;

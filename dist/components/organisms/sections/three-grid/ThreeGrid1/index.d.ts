import React, { ReactNode } from "react";
type Card = {
    image: string;
    alt: string;
    heading: string;
    subheading: string;
};
type Props = {
    cards: Card[];
    className?: string;
    heading?: ReactNode;
};
declare const ThreeGrid1: ({ cards, className, heading }: Props) => React.JSX.Element;
export default ThreeGrid1;

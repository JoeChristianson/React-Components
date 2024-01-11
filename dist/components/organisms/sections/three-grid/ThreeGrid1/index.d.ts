import React from "react";
type Card = {
    image: string;
    alt: string;
    heading: string;
    subheading: string;
};
type Props = {
    cards: Card[];
    className?: string;
};
declare const ThreeGrid1: ({ cards, className }: Props) => React.JSX.Element;
export default ThreeGrid1;

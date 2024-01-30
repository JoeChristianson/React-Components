import CreditType from "types/CreditType";
import React from "react";
type Props = {
    className?: string;
    creditCards?: CreditType[][];
    cardIndexUseState?: [number, React.Dispatch<number>];
};
declare const Credits: ({ className, creditCards, cardIndexUseState }: Props) => React.JSX.Element;
export default Credits;

import CardType from "types/CardType";
import React, { ReactNode } from "react";
type Props = {
    className?: string;
    card: CardType;
    children?: ReactNode;
    imgStyle?: React.CSSProperties;
};
declare const GenericCard: ({ className, card, imgStyle }: Props) => React.JSX.Element;
export default GenericCard;

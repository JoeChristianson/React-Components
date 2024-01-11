import React, { ReactNode } from "react";
import Direction from "../../../../../types/animation/Direction";
type Props = {
    className?: string;
    children: ReactNode;
    direction?: Direction;
    scale?: number;
};
declare const FadeInTowards: ({ className, children, direction, scale }: Props) => React.JSX.Element;
export default FadeInTowards;

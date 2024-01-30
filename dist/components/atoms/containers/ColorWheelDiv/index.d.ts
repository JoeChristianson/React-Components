import React, { ReactNode } from "react";
type Props = {
    className?: string;
    saturation?: number;
    light?: number;
    steps: number[];
    currentIndex: number;
    children: ReactNode;
};
declare const ColorWheelDiv: ({ className, saturation, light, steps, currentIndex, children }: Props) => React.JSX.Element;
export default ColorWheelDiv;

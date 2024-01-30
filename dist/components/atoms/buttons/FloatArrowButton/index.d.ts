import React from "react";
interface Props {
    direction: "up" | "down" | "left" | "right";
    handleClick: () => void;
    className: string;
}
declare const FloatArrowButton: ({ direction, handleClick, className }: Props) => React.JSX.Element;
export default FloatArrowButton;

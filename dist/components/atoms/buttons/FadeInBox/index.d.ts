import React, { ReactNode } from "react";
type Props = {
    className?: string;
    handleClick: () => void;
    children: ReactNode;
};
declare const FadeInBoxButton: ({ children, className, handleClick }: Props) => React.JSX.Element;
export default FadeInBoxButton;

import React, { ReactNode } from "react";
type Props = {
    className?: string;
    children?: ReactNode;
    src: string;
    alt: string;
};
declare const LogoAndName: ({ className, children, src, alt }: Props) => React.JSX.Element;
export default LogoAndName;

import React, { ReactNode } from "react";
type Props = {
    className?: string;
    children: ReactNode;
    noPadding?: boolean;
    id?: string;
};
declare const Section: ({ className, children, noPadding, id }: Props) => React.JSX.Element;
export default Section;

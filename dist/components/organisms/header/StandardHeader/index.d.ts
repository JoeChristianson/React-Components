import React, { ReactNode } from "react";
import NavItem from "types/NavItem";
type Props = {
    navItems: NavItem[];
    children?: ReactNode;
    heading?: string;
    maxWidth?: number;
};
declare const StandardHeader: ({ navItems, children, heading, maxWidth }: Props) => React.JSX.Element;
export default StandardHeader;

import NavItem from "../../../../../types/NavItem";
import React, { ReactNode } from "react";
type Props = {
    className?: string;
    src: string;
    alt: string;
    children: ReactNode;
    navItems: NavItem[];
};
declare const HamburgerHeader1: ({ className, src, alt, children, navItems }: Props) => React.JSX.Element;
export default HamburgerHeader1;

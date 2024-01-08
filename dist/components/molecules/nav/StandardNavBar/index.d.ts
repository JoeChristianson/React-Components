import NavItem from "types/NavItem";
import React from "react";
type Props = {
    className?: string;
    navItems: NavItem[];
};
declare const NavBar: ({ navItems, className }: Props) => React.JSX.Element;
export default NavBar;

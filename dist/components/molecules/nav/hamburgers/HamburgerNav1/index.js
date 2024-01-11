import styles from "./index.module.scss";
import React from "react";
import Hamburger1 from "../../../../../components/atoms/buttons/hamburgers/Hamburger1";
var HamburgerNav1 = function (_a) {
    var className = _a.className, navItems = _a.navItems;
    var fullClassName = styles.div + " " + className || "";
    return React.createElement("div", { className: fullClassName },
        React.createElement(Hamburger1, { navItems: navItems }));
};
export default HamburgerNav1;

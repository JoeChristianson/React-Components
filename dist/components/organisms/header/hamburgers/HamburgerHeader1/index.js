import HamburgerNav1 from "../../../../../components/molecules/nav/hamburgers/HamburgerNav1";
import styles from "./index.module.scss";
import React from "react";
var HamburgerHeader1 = function (_a) {
    var className = _a.className, src = _a.src, alt = _a.alt, children = _a.children, navItems = _a.navItems;
    var fullClassName = styles.header + " " + className || "";
    return React.createElement("header", { className: fullClassName },
        React.createElement("div", { className: styles.left },
            React.createElement("img", { src: src }),
            children),
        React.createElement("div", { className: styles.right },
            React.createElement(HamburgerNav1, { navItems: navItems })));
};
export default HamburgerHeader1;

"use client";
import styles from "./index.module.scss";
import React, { useState } from "react";
var DropdownHamburger1 = function (_a) {
    var className = _a.className, navItems = _a.navItems;
    var fullClassName = styles.div + " " + className || "";
    var _b = useState(false), checked = _b[0], setChecked = _b[1];
    var handleParentClick = function (e) {
        setChecked(!checked);
    };
    return React.createElement(React.Fragment, null,
        React.createElement("div", { onClick: handleParentClick, className: styles.clicker }),
        React.createElement("div", { className: fullClassName },
            React.createElement("label", null,
                React.createElement("input", { checked: checked, type: "checkbox" }),
                React.createElement("span", { className: styles.menu },
                    " ",
                    React.createElement("span", { className: styles.hamburger }),
                    " "),
                React.createElement("ul", null, [1, 2, 3].map(function (navItem, index) {
                    var _a = { name: "home", href: "" }, name = _a.name, href = _a.href;
                    return React.createElement("li", { key: index },
                        React.createElement("a", { href: href }, name),
                        " ");
                })))));
};
export default DropdownHamburger1;

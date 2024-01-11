import styles from "./index.module.scss";
import React from "react";
var Hamburger1 = function (_a) {
    var className = _a.className, navItems = _a.navItems;
    var fullClassName = styles.div + " " + className || "";
    return React.createElement("div", { className: fullClassName },
        React.createElement("label", null,
            React.createElement("input", { type: "checkbox" }),
            React.createElement("span", { className: styles.menu },
                " ",
                React.createElement("span", { className: styles.hamburger }),
                " "),
            React.createElement("ul", null, navItems.map(function (navItem, index) {
                var name = navItem.name, href = navItem.href;
                return React.createElement("li", { key: index },
                    React.createElement("a", { href: href }, name),
                    " ");
            }))));
};
export default Hamburger1;

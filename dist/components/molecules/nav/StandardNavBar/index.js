import styles from "./index.module.scss";
import React from "react";
var NavBar = function (_a) {
    var navItems = _a.navItems, className = _a.className;
    var fullClassName = "".concat(styles.nav, " ").concat(className || "");
    return React.createElement("nav", { className: fullClassName },
        React.createElement("ul", null, navItems.map(function (item, index) {
            var name = item.name, href = item.href;
            return React.createElement("li", null,
                React.createElement("a", { href: href }, name));
        })));
};
export default NavBar;

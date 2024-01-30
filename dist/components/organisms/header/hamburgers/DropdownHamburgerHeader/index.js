import styles from "./index.module.scss";
import React from "react";
var DropdownHamburgerHeader = function (_a) {
    var className = _a.className, dropdownNav = _a.dropdownNav;
    var fullClassName = styles.div + " " + className || "";
    return React.createElement("div", { className: fullClassName });
};
export default DropdownHamburgerHeader;

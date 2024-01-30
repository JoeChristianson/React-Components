import styles from "./index.module.scss";
import React from "react";
import Anchor1 from "../../../../../components/atoms/anchors/Anchor1";
import Dropdown1 from "../../../../../components/atoms/dropdowns/DropDown1";
import DropDownContent from "./DropDownContent";
var DropdownNavBar1 = function (_a) {
    var className = _a.className, dropdownNav = _a.dropdownNav;
    var items = dropdownNav.items;
    var fullClassName = styles.nav + " " + className || "";
    return React.createElement("nav", { className: fullClassName }, items.map(function (item, index) {
        var name = item.name, href = item.href, subItemGroups = item.subItemGroups;
        if (subItemGroups) {
            return React.createElement("div", { className: styles['dropdown-cont'], style: { position: "relative" } },
                React.createElement(Anchor1, null, name),
                React.createElement(Dropdown1, { className: styles.dropdown },
                    React.createElement(DropDownContent, { subItemGroups: subItemGroups })));
        }
        else {
            return React.createElement(Anchor1, { href: href || "" }, name);
        }
    }));
};
export default DropdownNavBar1;

import styles from "./index.module.scss";
import React from "react";
import SubItemGroupComp from "./SubItemGroup";
var DropDownContent = function (_a) {
    var className = _a.className, subItemGroups = _a.subItemGroups;
    var fullClassName = styles.div + " " + className || "";
    return React.createElement("div", { className: fullClassName }, subItemGroups.map(function (group, index) {
        return React.createElement(SubItemGroupComp, { key: index, subItemGroup: group });
    }));
};
export default DropDownContent;

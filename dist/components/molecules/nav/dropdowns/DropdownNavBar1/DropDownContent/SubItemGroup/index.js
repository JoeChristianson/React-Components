import styles from "./index.module.scss";
import React from "react";
var SubItemGroup = function (_a) {
    var className = _a.className, subItemGroup = _a.subItemGroup;
    var heading = subItemGroup.heading, subItems = subItemGroup.subItems;
    var fullClassName = styles.div + " " + className || "";
    return React.createElement("div", { className: fullClassName },
        heading && React.createElement("h3", null, heading),
        subItems.map(function (item, index) {
            var name = item.name, href = item.href;
            return React.createElement("a", { key: index, href: href }, name);
        }));
};
export default SubItemGroup;

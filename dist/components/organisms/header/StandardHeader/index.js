import React from "react";
import styles from "./index.module.scss";
import FlexBar from "../../../atoms/containers/FlexBar";
import StandardNavBar from "../../../molecules/nav/StandardNavBar";
import NavHeading from "../../../atoms/NavHeading";
var StandardHeader = function (_a) {
    var navItems = _a.navItems, children = _a.children, heading = _a.heading, maxWidth = _a.maxWidth;
    return React.createElement("header", { className: styles.header },
        React.createElement(FlexBar, null,
            React.createElement("div", { className: styles.left },
                heading && React.createElement(NavHeading, null, heading),
                children),
            React.createElement(StandardNavBar, { navItems: navItems })));
};
export default StandardHeader;

import React from "react";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretLeft, faCaretRight, faCaretUp } from "@fortawesome/free-solid-svg-icons";
var FloatArrowButton = function (_a) {
    var direction = _a.direction, handleClick = _a.handleClick, className = _a.className;
    var onClick = function () {
        handleClick();
    };
    var icons = {
        up: faCaretUp,
        down: faCaretDown,
        left: faCaretLeft,
        right: faCaretRight
    };
    return React.createElement("div", { className: "".concat(styles.div, " ").concat(styles[direction], " ").concat(className), onClick: onClick },
        React.createElement(FontAwesomeIcon, { icon: icons[direction] }));
};
export default FloatArrowButton;

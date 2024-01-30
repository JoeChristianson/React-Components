import styles from "./index.module.scss";
import React from "react";
var Anchor1 = function (_a) {
    var className = _a.className, children = _a.children, href = _a.href, targetBlank = _a.targetBlank;
    var fullClassName = styles.a + " " + className || "";
    return React.createElement("a", { href: href, target: targetBlank ? "_blank" : "_self", className: fullClassName },
        React.createElement("span", null, children));
};
export default Anchor1;

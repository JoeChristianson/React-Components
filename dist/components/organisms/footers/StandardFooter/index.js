import styles from "./index.module.scss";
import React from "react";
import LogoAndName from "../../../../components/molecules/logo/LogoAndName";
import Socials1 from "../../../../components/molecules/socials/Socials/Socials1";
var StandardFooter = function (_a) {
    var className = _a.className, socials = _a.socials, src = _a.src, alt = _a.alt, logoText = _a.logoText;
    var fullClassName = styles.footer + " " + className || "";
    console.log({ socials: socials });
    return React.createElement("footer", { className: fullClassName },
        React.createElement("div", { className: styles.left },
            React.createElement(LogoAndName, { src: src, alt: alt }, logoText)),
        React.createElement("div", { className: styles.center }),
        React.createElement("div", { className: styles.right },
            React.createElement(Socials1, { socials: socials })));
};
export default StandardFooter;

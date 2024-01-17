import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getSocialIcon from "../../../../utils/socials/getSocialIcon";
import styles from "./index.module.scss";
import React from "react";
var SocialIcon = function (_a) {
    var className = _a.className, platform = _a.platform, href = _a.href;
    var fullClassName = styles.div + " " + className || "";
    var icon = getSocialIcon(platform);
    return React.createElement("div", { className: fullClassName },
        React.createElement("a", { href: href || "", target: "_blank" },
            React.createElement(FontAwesomeIcon, { icon: icon })));
};
export default SocialIcon;

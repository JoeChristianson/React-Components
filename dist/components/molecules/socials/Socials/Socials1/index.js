import styles from "./index.module.scss";
import React from "react";
import SocialIcon from "../../../../../components/molecules/element-plus/SocialIcon";
import getSocialsList from "../../../../../utils/socials/getSocialsList";
var Socials1 = function (_a) {
    var className = _a.className, socials = _a.socials;
    var fullClassName = styles.div + " " + className || "";
    if (!socials) {
        return React.createElement(React.Fragment, null);
    }
    var socialsList = getSocialsList({ socials: socials });
    return React.createElement("div", { className: fullClassName }, socialsList.map(function (social, index) {
        var platform = social.platform, href = social.href;
        return React.createElement(SocialIcon, { key: index, platform: platform, href: href });
    }));
};
export default Socials1;

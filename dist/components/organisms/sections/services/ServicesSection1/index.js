import ImageStele from "../../../../../components/molecules/image/ImageStele";
import SideBySide from "../../../../../components/atoms/containers/SideBySide";
import styles from "./index.module.scss";
import React from "react";
import HeadingWithSuperscript from "../../../../../components/molecules/element-plus/HeadingWithSuperscript";
var ServicesSection1 = function (_a) {
    var reverse = _a.reverse, className = _a.className, services = _a.services, category = _a.category, overheading = _a.overheading, img = _a.img, alt = _a.alt;
    var fullClassName = styles.section + " " + className || "";
    return React.createElement("section", { className: fullClassName },
        React.createElement(SideBySide, { className: reverse ? styles.reverse : "" },
            React.createElement("div", { className: styles.left },
                React.createElement(HeadingWithSuperscript, { heading: category, superscript: overheading }),
                React.createElement("div", { className: styles.services }, services.map(function (service, index) {
                    var name = service.name, price = service.price;
                    return React.createElement("div", { className: styles.service, key: index },
                        name,
                        " ",
                        React.createElement("strong", null, price));
                }))),
            React.createElement("div", { className: styles.right },
                React.createElement(ImageStele, { src: img, alt: alt, className: styles.stele }))));
};
export default ServicesSection1;

import styles from "./index.module.scss";
import React from "react";
import getImageURL from "./getImageURL";
import useOnScreen from "../../../../hooks/useOnScreen";
var TechStack1 = function (_a) {
    var className = _a.className, techStack = _a.techStack;
    var _b = useOnScreen({ threshold: 0.1 }), ref = _b.ref, isIntersecting = _b.isIntersecting;
    var images = techStack.map(function (tech) {
        return getImageURL({ tech: tech });
    });
    var fullClassName = "".concat(styles['tech-stack-list'], " ").concat(isIntersecting ? styles['visible'] : styles.invisible);
    return React.createElement("div", { ref: ref, className: fullClassName }, images.map(function (img, index) {
        return React.createElement("div", { className: styles['icon-wrapper'] },
            React.createElement(Icon, { key: index, src: img }));
    }));
};
export default TechStack1;

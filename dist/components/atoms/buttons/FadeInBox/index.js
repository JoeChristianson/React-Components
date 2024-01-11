import styles from "./index.module.scss";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
var FadeInBoxButton = function (_a) {
    var children = _a.children, className = _a.className, handleClick = _a.handleClick;
    var ref = useRef(null);
    var isInView = useInView(ref);
    var fullClassName = styles.button + " " + className || "";
    var variants = {
        hidden: {
            opacity: .2,
            transform: 'translateX(-30px)'
        },
        visible: {
            opacity: .9,
            transform: 'translateX(0px)',
            transition: {
                duration: .7,
            }
        },
        hover: {
            opacity: 1,
            background: "rgb(234 152 152)",
            transition: {
                duration: 0.3,
            }
        }
    };
    return React.createElement(motion.button, { whileInView: "visible", whileHover: "hover", variants: variants, style: variants.hidden, onClick: handleClick, className: fullClassName }, children);
};
export default FadeInBoxButton;

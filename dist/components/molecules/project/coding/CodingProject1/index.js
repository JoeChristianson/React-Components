import styles from "./index.module.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import ParagraphSplitter from "../../../../../components/molecules/element-plus/ParagraphSplitter";
import TechStack1 from "../../../../../components/molecules/tech-stack/TechStack1";
var CodingProject1 = function (_a) {
    var className = _a.className, project = _a.project;
    var link = project.link, code = project.code, techStack = project.techStack, description = project.description, img = project.img, name = project.name;
    var fullClassName = styles.project + " " + className || "";
    return React.createElement("article", { className: fullClassName },
        React.createElement("div", { className: styles.left },
            React.createElement("div", { className: styles['img-cont'] },
                React.createElement("div", { className: styles['slide-down'] },
                    link &&
                        React.createElement("a", { href: link },
                            React.createElement(FontAwesomeIcon, { icon: faLink, size: "4x" })),
                    code && React.createElement("a", { href: code },
                        React.createElement(FontAwesomeIcon, { icon: faLink, size: "4x" }))),
                React.createElement("img", { src: img })),
            React.createElement(TechStack1, { techStack: techStack })),
        React.createElement("div", { className: styles.right },
            React.createElement("h2", null, name),
            React.createElement(ParagraphSplitter, { text: description })));
};
export default CodingProject1;

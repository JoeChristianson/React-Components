import React from "react";
import Section from "../../../../../../components/atoms/section/Section";
import styles from "./index.module.scss";
import CodingProject1 from "../../../../../../components/molecules/project/coding/CodingProject1";
var CodingProjects1 = function (_a) {
    var projects = _a.projects, heading = _a.heading;
    return React.createElement(Section, { className: styles['section'] },
        React.createElement("h1", null, heading),
        projects.map(function (project, index) {
            return React.createElement(CodingProject1, { project: project, key: index });
        }));
};
export default CodingProjects1;

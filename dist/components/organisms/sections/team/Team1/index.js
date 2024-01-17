import ImageStele from "../../../../../components/molecules/image/ImageStele";
import styles from "./index.module.scss";
import React from "react";
import Heading from "../../../../../components/atoms/Heading";
import Socials1 from "../../../../../components/molecules/socials/Socials/Socials1";
import Section from "../../../../../components/atoms/section/Section";
var Team1 = function (_a) {
    var className = _a.className, team = _a.team, steleBgs = _a.steleBgs, heading = _a.heading;
    var fullClassName = styles.section + " " + className || "";
    var defaultSteleBgs = [
        "red", "yellow", "blue"
    ];
    var heights = [100, 80, 60];
    var bgs = steleBgs || defaultSteleBgs;
    var delays = [.2, .4, .6];
    return React.createElement(Section, { className: fullClassName },
        React.createElement(Heading, null, heading || "Our Team"),
        React.createElement("div", { className: styles['team-cont'] }, team.map(function (member, index) {
            var src = member.src, alt = member.alt, name = member.name, position = member.position, socials = member.socials;
            return React.createElement("div", { className: styles.member },
                React.createElement(ImageStele, { steleBg: bgs === null || bgs === void 0 ? void 0 : bgs[index], src: src, alt: alt, className: styles['stele-cont'], heightPercentage: heights[index], animated: true, delay: delays[index], xTranslate: 4, widthPercentage: 90 }),
                React.createElement("div", { className: styles['text-cont'] },
                    React.createElement("h2", null, name),
                    React.createElement("h5", null, position)),
                socials && React.createElement(Socials1, { socials: socials }));
        })));
};
export default Team1;

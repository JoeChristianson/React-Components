import styles from "./index.module.scss";
import React from "react";
var VideoHero1 = function (_a) {
    var className = _a.className, videoURL = _a.videoURL;
    var fullClassName = styles.section + " " + className || "";
    return React.createElement("section", { className: fullClassName });
};
export default VideoHero1;

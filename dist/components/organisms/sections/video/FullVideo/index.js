import VideoBackground from "../../../../../components/molecules/VideoBackground";
import styles from "./index.module.scss";
import React from "react";
var d = {
    videoURL: "",
};
var FullVideo = function (_a) {
    var className = _a.className, videoURL = _a.videoURL, children = _a.children;
    var fullClassName = styles.section + " " + className || "";
    return React.createElement("section", { className: fullClassName },
        React.createElement(VideoBackground, { src: videoURL }, children || React.createElement(React.Fragment, null)));
};
export default FullVideo;

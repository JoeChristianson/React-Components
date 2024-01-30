import VideoBackground from "../../../../../../components/molecules/VideoBackground";
import styles from "./index.module.scss";
import React from "react";
var d = {
    videoURL: "",
};
var VideoHero1 = function (_a) {
    var className = _a.className, videoURL = _a.videoURL, img = _a.img;
    var fullClassName = styles.section + " " + className || "";
    return React.createElement("section", { className: fullClassName },
        React.createElement(VideoBackground, { src: videoURL },
            React.createElement("div", { className: styles.cont },
                React.createElement("h1", null, "Aster's Bistro"),
                img && React.createElement("img", { src: img }),
                React.createElement("h3", null, "Good Times Since 2021"))));
};
export default VideoHero1;

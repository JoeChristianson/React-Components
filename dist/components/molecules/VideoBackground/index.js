import styles from "./index.module.scss";
import React from "react";
var VideoBackground = function (_a) {
    var className = _a.className, src = _a.src, children = _a.children;
    var fullClassName = styles.div + " " + className || "";
    return React.createElement("div", { className: fullClassName },
        React.createElement("video", { autoPlay: true, loop: true, muted: true, "plays-inline": "true", className: styles.video },
            React.createElement("source", { src: src || "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", type: "video/mp4" })),
        React.createElement("div", { className: styles.content }, children || React.createElement(React.Fragment, null)));
};
export default VideoBackground;

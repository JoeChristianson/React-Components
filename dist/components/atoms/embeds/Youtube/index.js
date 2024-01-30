import styles from "./index.module.scss";
import React from "react";
var d = {
    src: "youtube.com"
};
var Youtube = function (_a) {
    var className = _a.className, src = _a.src;
    var fullClassName = styles.div + " " + className || "";
    var getVideoId = function (src) {
        if (src.includes("watch?v=")) {
            return src.split("watch?v=")[1];
        }
        return src;
    };
    var currentSrc = src || d.src;
    var videoId = getVideoId(currentSrc);
    return React.createElement("div", { className: fullClassName },
        React.createElement("iframe", { style: styles.iframeStyle, src: "https://www.youtube.com/embed/" + videoId, title: "YouTube video player", frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowfullscreen: true }));
};
export default Youtube;

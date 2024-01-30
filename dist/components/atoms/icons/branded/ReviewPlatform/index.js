import styles from "./index.module.scss";
import React from "react";
var ReviewPlatformIcon = function (_a) {
    var className = _a.className, platform = _a.platform;
    var fullClassName = styles.div + " " + className || "";
    var logos = {
        yelp: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Yelp.svg/640px-Yelp.svg.png",
        google: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/640px-Google_%22G%22_logo.svg.png"
    };
    return React.createElement("div", { className: fullClassName },
        React.createElement("img", { src: logos[platform], alt: platform }));
};
export default ReviewPlatformIcon;

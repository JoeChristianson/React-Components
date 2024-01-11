import React from "react";
import styles from "./index.module.scss";
import Paragraph from "../../../../components/atoms/text/Paragraph";
var ParagraphSplitter = function (_a) {
    var text = _a.text;
    return React.createElement(React.Fragment, null, text.split("<br>").map(function (p, index) {
        return React.createElement(Paragraph, { className: styles.p, key: index }, p);
    }));
};
export default ParagraphSplitter;

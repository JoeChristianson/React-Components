import React from "react";
import styles from "./index.module.scss";
import SideBySide from "../../../../../atoms/containers/SideBySide";
import ImageStele from "../../../../../molecules/image/ImageStele";
import AppointmentForm1 from "../../../../../organisms/forms/appointments/AppointmentForm1";
var AppointmentBooking1 = function (_a) {
    var src = _a.src, alt = _a.alt, steleBg = _a.steleBg, availableServices = _a.availableServices, className = _a.className;
    var fullClassName = "".concat(styles.section, " ").concat(className || "");
    return React.createElement("section", { className: fullClassName },
        React.createElement(SideBySide, { className: styles['side-by-side'] },
            React.createElement(React.Fragment, null,
                React.createElement("div", { className: styles.left },
                    React.createElement(ImageStele, { steleBg: steleBg, className: styles['stele-cont'], src: src, alt: alt })),
                React.createElement(AppointmentForm1, { availableServices: availableServices, className: styles['form-cont'] }))));
};
export default AppointmentBooking1;

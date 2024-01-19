"use client";
import { useEffect, useRef, useState } from "react";
var useOnScreen = function (options) {
    var ref = useRef(null);
    var _a = useState(false), isIntersecting = _a[0], setIntersecting = _a[1];
    useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            setIntersecting(entry.isIntersecting);
        }, options);
        if (ref.current) {
            observer.observe(ref.current);
        }
        return function () {
            observer.disconnect();
        };
    }, [options]); // dependencies should include options
    return { ref: ref, isIntersecting: isIntersecting };
};
export default useOnScreen;

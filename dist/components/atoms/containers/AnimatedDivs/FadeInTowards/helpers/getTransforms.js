var getTransforms = function (_a) {
    var direction = _a.direction, scale = _a.scale;
    var dir = direction || "left";
    var scl = scale || 30;
    switch (dir) {
        case "left":
            return {
                hiddenTransform: "translateX(-".concat(scl, "px)"),
                visibleTransform: "translateX(0px)"
            };
        case "right":
            return {
                hiddenTransform: "translateX(".concat(scl, "px)"),
                visibleTransform: "translateX(0px)"
            };
        case "up":
            return {
                hiddenTransform: "translateY(-".concat(scl, "px)"),
                visibleTransform: "translateY(0px)"
            };
        case "down":
            return {
                hiddenTransform: "translateY(".concat(scl, "px)"),
                visibleTransform: "translateY(0px)"
            };
    }
};
export default getTransforms;

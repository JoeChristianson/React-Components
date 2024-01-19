// this map is for images that are not png
var imageMap = new Map();
imageMap.set("next", "nextJS.webp");
var getImageURL = function (_a) {
    var tech = _a.tech;
    var match = imageMap.get(tech);
    if (match) {
        return "/images/tech/".concat(match);
    }
    return "/images/tech/".concat(tech, ".png");
};
export default getImageURL;

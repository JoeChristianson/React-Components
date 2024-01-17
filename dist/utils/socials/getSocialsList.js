var getSocialsList = function (_a) {
    var socials = _a.socials;
    var socialsArray = [];
    for (var key in socials) {
        var platform = key;
        socialsArray.push({ platform: platform, href: socials[platform] });
    }
    return socialsArray;
};
export default getSocialsList;

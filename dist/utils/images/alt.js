var alt = function (imageUrl) {
    var baseName = imageUrl.split('/').pop();
    if (!baseName) {
        return imageUrl;
    }
    var filenameWithoutExtension = baseName.split('.').slice(0, -1).join('.');
    var withoutHyphens = filenameWithoutExtension.replaceAll("-", " ");
    return withoutHyphens;
};
export default alt;

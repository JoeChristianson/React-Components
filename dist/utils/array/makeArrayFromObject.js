var makeArrayFromObject = function (_a) {
    var object = _a.object;
    var array = [];
    for (var key in object) {
        var res = { key: key, value: object[key] };
        array.push(res);
    }
    return array;
};
export default makeArrayFromObject;

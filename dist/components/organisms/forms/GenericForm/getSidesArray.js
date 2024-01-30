var getSidesArray = function (_a) {
    var inputs = _a.inputs;
    var array = [];
    inputs.forEach(function (input, index) {
        if (input.width === 2 || !input.width) {
            array.push("full");
        }
        else if (index === 0) {
            array.push("left");
        }
        else if (array[index - 1] === "left") {
            array.push("right");
        }
        else {
            array.push("left");
        }
    });
    return array;
};
export default getSidesArray;

var getStarsArray = function (number) {
    var array = [];
    for (var i = 0; i < number; i++) {
        if (number - i >= 1) {
            array.push("full");
        }
        else {
            array.push("half");
        }
    }
    return array;
};
export default getStarsArray;

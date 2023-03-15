var validateText = "`~1234567890-= !@#$%^&*()_+[]{};':,./<>?\|";
var afterValidateText = '"';
var fillme = " ";
var validateNumberCheckLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var validateNumberCheckSpecial = "`~!@#$%^&*()_+-={[}}|\:;',<.>/?";
var upperConvert = function (options) {
    if (!(options === "")) {
        var upperLetter = options.toUpperCase();
        return upperLetter;
    }
    else {
        throw new Error("Cannot empty");
    }
};
var lowerConvert = function (options) {
    if (!(options === "")) {
        var upperLetter = options.toLowerCase();
        return upperLetter;
    }
    else {
        throw new Error("Cannot empty");
    }
};
var Eletter = function (options) {
    if (!(options === "")) {
        var totalLetter_1 = "";
        var seperateAll = options.split("");
        seperateAll.map(function (letter) {
            validateText.includes(letter) ? "" : (afterValidateText.includes(letter) ? "" : (totalLetter_1 += letter));
        });
        return lowerConvert(totalLetter_1);
    }
    else {
        throw new Error("Cannot empty");
    }
};
var ESletter = function (options) {
    if (!(options === "")) {
        var totalLetter_2 = "";
        var seperateAll = options.split("");
        seperateAll.map(function (letter) {
            validateText.includes(letter) ? "" : (afterValidateText.includes(letter) ? "" : (totalLetter_2 += letter));
        });
        return totalLetter_2;
    }
    else {
        throw new Error("Cannot empty");
    }
};
var Enumber = function (options) {
    if (!(options === "")) {
        var totalNumber_1 = "";
        var lowerLetters = lowerConvert(validateNumberCheckLetter);
        var lowerLetter_1 = lowerLetters;
        var seperateAll = options.split("");
        seperateAll.map(function (number) {
            validateNumberCheckLetter.includes(number) ? "" : (validateNumberCheckSpecial.includes(number) ? "" : (lowerLetter_1.includes(number) ? "" : (fillme.includes(number) ? "" : (totalNumber_1 += number))));
        });
        return Number(totalNumber_1);
    }
    else {
        throw new Error("Cannot empty");
    }
};
var ESnumber = function (options) {
    if (!(options === "")) {
        var totalNumber_2 = "";
        var lowerLetters = lowerConvert(validateNumberCheckLetter);
        var lowerLetter_2 = lowerLetters;
        var seperateAll = options.split("");
        seperateAll.map(function (number) {
            validateNumberCheckLetter.includes(number) ? "" : (validateNumberCheckSpecial.includes(number) ? "" : (lowerLetter_2.includes(number) ? "" : (fillme.includes(number) ? "" : (totalNumber_2 += number))));
        });
        return totalNumber_2;
    }
    else {
        throw new Error("Cannot empty");
    }
};
var Especial = function (options) {
    if (!(options === "")) {
        var totalSpecial_1 = "";
        var letterCheck_1 = Eletter(options);
        var numberCheck_1 = String(Enumber(options));
        var UpperCheck_1 = upperConvert(letterCheck_1);
        var seperateAll = options.split("");
        seperateAll.map(function (special) {
            letterCheck_1.includes(special) ? "" : (numberCheck_1.includes(special) ? "" : (UpperCheck_1.includes(special) ? "" : (totalSpecial_1 += special)));
        });
        return totalSpecial_1;
    }
    else {
        throw new Error("cannot empty");
    }
};
var giveMeRandom = function (value) {
    var randomnumber = Math.floor(Math.random() * value);
    return randomnumber;
};
var suffleMe = function (data) {
    if (!(data.length == 0)) {
        var newData = [];
        var length_1 = data.length;
        var random = giveMeRandom(length_1);
        var tol = length_1;
        var randomSaver = [];
        var returnRandom = [];
        var actual = 0;
        for (var i = 0; i <= tol; i++) {
            if (actual == length_1) {
                returnRandom = newData;
            }
            else {
                if (!randomSaver.includes(random)) {
                    newData.push(data[random]);
                    randomSaver.push(random);
                    actual++;
                }
                else {
                    random = giveMeRandom(length_1);
                    tol++;
                }
            }
        }
        return newData;
    }
    else {
        throw new Error("Cannot empty ");
    }
};
var RangeData = function (Data, initial, final) {
    if (Data.length < final) {
        throw new Error("Limit excessed");
    }
    else {
        var finalData = [];
        for (var i = initial; i <= final; i++) {
            finalData.push(Data[i]);
        }
        return finalData;
    }
};
var deleteData = function (oldData, position) {
    if (!(oldData.length == 0)) {
        oldData.splice(position, 1);
        return oldData;
    }
    else {
        throw new Error("cannot empty");
    }
};
module.exports = { Eletter: Eletter, ESletter: ESletter, ESnumber: ESnumber, Enumber: Enumber, Especial: Especial, giveMeRandom: giveMeRandom, suffleMe: suffleMe, RangeData: RangeData, deleteData: deleteData };

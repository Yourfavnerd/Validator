const validateText = "`~1234567890-= !@#$%^&*()_+[]{};':,./<>?\|";
const afterValidateText = '"';
const fillme = " ";
const validateNumberCheckLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const validateNumberCheckSpecial = "`~!@#$%^&*()_+-={[}}|\:;',<.>/?"
const upperConvert = (options) => {
    if (!options == "") {
        const upperLetter = options.toUpperCase();
        return upperLetter;
    } else {
        return 0
    }
}
const lowerConvert = (options) => {
    if (!options == "") {
        const upperLetter = options.toLowerCase();
        return upperLetter;
    } else {
        return 0
    }
}
const Eletter = (options) => {
    if ((!options) == "") {
        let totalLetter = "";
        const seperateAll = options.split("");
        let refinedSearch = "";
        seperateAll.map((letter) => {
            validateText.includes(letter) ? "" : (afterValidateText.includes(letter) ? "" : (totalLetter += letter));
        })
        refinedSearch = lowerConvert(totalLetter);
        return refinedSearch;
    } else {
        return 0;
    }
}
const ESletter = (options) => {
    if ((!options) == "") {
        let totalLetter = "";
        const seperateAll = options.split("");
        seperateAll.map((letter) => {
            validateText.includes(letter) ? "" : (afterValidateText.includes(letter) ? "" : (totalLetter += letter));
        })
        return totalLetter;
    } else {
        return 0;
    }
}
const ESnumber = (options) => {
    if (!options == "") {
        let totalNumber = "";
        const lowerLetter = lowerConvert(validateNumberCheckLetter);
        const seperateAll = options.split("");
        seperateAll.map((number) => {
            validateNumberCheckLetter.includes(number) ? "" : (validateNumberCheckSpecial.includes(number) ? "" : (lowerLetter.includes(number) ? "" : (fillme.includes(number) ? "" : (totalNumber += number))));
        })
        return totalNumber
    } else {
        return 0;
    }
}
const Enumber = (options) => {
    if (!options == "") {
        let totalNumber = "";
        const lowerLetter = lowerConvert(validateNumberCheckLetter);
        const seperateAll = options.split("");
        seperateAll.map((number) => {
            validateNumberCheckLetter.includes(number) ? "" : (validateNumberCheckSpecial.includes(number) ? "" : (lowerLetter.includes(number) ? "" : (fillme.includes(number) ? "" : (totalNumber += number))));
        })
        return Math.floor(totalNumber)
    } else {
        return 0;
    }
}

const Especial = (options) => {
    if (!options == "") {
        let totalSpecial = "";
        const letterCheck = Eletter(options);
        const numberCheck = Enumber(options);
        const UpperCheck = upperConvert(letterCheck);
        const seperateAll = options.split("");
        seperateAll.map((special) => {
            letterCheck.includes(special) ? "" : (numberCheck.includes(special) ? "" : (UpperCheck.includes(special) ? "" : (totalSpecial += special)));
        })
        return totalSpecial;
    } else {
        return 0;
    }
}
const giveMePosition = (data, options) => {
    if (component.includes(lowerConvert(options))) {
        const userVal = lowerConvert(options);
        let returnVal;
        data.map((curenelem, i) => {
            if (curenelem == userVal) {
                returnVal = ++i;
            }
        })
        return returnVal
    } else {
        return 0;
    }
}
const giveMeRandom = (value) => {
    let randomnumber = Math.floor(Math.random() * value)
    return randomnumber;
}
const suffleMe = (data) => {
    const newData = [];
    const length = data.length;
    let random = giveMeRandom(length);
    let tol = length;
    let randomSaver = [];
    let returnRandom = [];
    let actual = 0;
    for (var i = 0; i <= tol; i++) {
        if (actual == length) {
            returnRandom = newData;
        } else {
            if (!randomSaver.includes(random)) {
                newData.push(data[random])
                randomSaver.push(random)
                actual++
            } else {
                random = giveMeRandom(length);
                tol++;
            }
        }
    }
    return returnRandom
}
module.exports = { Eletter, ESletter, ESnumber, Enumber, Especial, giveMePosition, giveMeRandom, suffleMe };
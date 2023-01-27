const validateText = "`~ 1234567890-=!@#$%^&*()_+[]{};':,./<>?\|";
const component = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
const afterValidateText = '"';
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
        seperateAll.map((letter) => {
            validateText.includes(letter) ? "" : (afterValidateText.includes(letter) ? "" : (totalLetter += letter));
        })
        refinedSearch = lowerConvert(totalLetter);
        return refinedSearch;
    } else {
        return 0;
    }
}
const Enumber = (options) => {
    if (!options == "") {
        let totalNumber = "";
        const lowerLetter = Eletter(validateNumberCheckLetter);
        const seperateAll = options.split("");
        seperateAll.map((number) => {
            validateNumberCheckLetter.includes(number) ? "" : (lowerLetter.includes(number) ? "" : (validateNumberCheckSpecial.includes(number)) ? "" : totalNumber += number);
        })
        return totalNumber
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
const giveMePosition = (data, H) => {
    if (component.includes(lowerConvert(H))) {
        const userVal = lowerConvert(H);
        let returnVal;
        data.map((curenelem, i) => {
            if (curenelem == userVal) {
                returnVal = i;
            }
        })
        return returnVal
    } else {
        return -1;
    }
}
const maker = (H, data, position, link) => {
    if (link) {
        const createDiv = document.getElementById(position);
        const pos = giveMePosition(component, H)
        console.log(pos)
        if (pos >= 0) {
            data.map((currenelem) => {
                const totalData = `<${component[pos]}>
                <a href=${currenelem[1]}>${currenelem[0]}</a>
                </${component[pos]}>`;
                createDiv.insertAdjacentHTML("beforeend", totalData);
            })
        }
    } else {
        const createDiv = document.getElementById(position);
        const pos = giveMePosition(component, H)
        if (pos >= 0) {
            data.map((currenelem) => {
                const totalData = `<${component[pos]}>${currenelem}</${component[pos]}>`;
                createDiv.insertAdjacentHTML("beforeend", totalData);
            })
        }
    }
}



module.exports = { Eletter, Enumber, Especial, giveMePosition, maker };
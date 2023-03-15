const validateText: string = "`~1234567890-= !@#$%^&*()_+[]{};':,./<>?\|";
const afterValidateText: string = '"';
const fillme: string = " ";
const validateNumberCheckLetter: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const validateNumberCheckSpecial: string = "`~!@#$%^&*()_+-={[}}|\:;',<.>/?"

const upperConvert = (options: string): string => {
    if (!(options === "")) {
        const upperLetter: string = options.toUpperCase();
        return upperLetter;
    } else {
        throw new Error("Cannot empty")
    }
}
const lowerConvert = (options: string): string => {
    if (!(options === "")) {
        const upperLetter: string = options.toLowerCase();
        return upperLetter;
    } else {
        throw new Error("Cannot empty")
    }
}
const Eletter = (options: string): string => {
    if (!(options === "")) {
        let totalLetter: string = "";
        const seperateAll: string[] = options.split("");
        seperateAll.map((letter: string) => {
            validateText.includes(letter) ? "" : (afterValidateText.includes(letter) ? "" : (totalLetter += letter));
        })
        return lowerConvert(totalLetter)
    } else {
        throw new Error("Cannot empty")
    }
}
const ESletter = (options: string): string => {
    if (!(options === "")) {
        let totalLetter: string = "";
        const seperateAll: string[] = options.split("");
        seperateAll.map((letter: string) => {
            validateText.includes(letter) ? "" : (afterValidateText.includes(letter) ? "" : (totalLetter += letter));
        })
        return totalLetter;
    } else {
        throw new Error("Cannot empty")
    }
}

const Enumber = (options: string): number => {
    if (!(options === "")) {
        let totalNumber: string = "";
        let lowerLetters: string | 0 = lowerConvert(validateNumberCheckLetter);
        let lowerLetter: string = lowerLetters as string
        const seperateAll: string[] = options.split("");
        seperateAll.map((number: string) => {
            validateNumberCheckLetter.includes(number) ? "" : (validateNumberCheckSpecial.includes(number) ? "" : (lowerLetter.includes(number) ? "" : (fillme.includes(number) ? "" : (totalNumber += number))));
        })
        return Number(totalNumber)
    } else {
        throw new Error("Cannot empty")
    }
}
const ESnumber = (options: string): string => {
    if (!(options === "")) {
        let totalNumber: string = "";
        const lowerLetters: string | 0 = lowerConvert(validateNumberCheckLetter);
        const lowerLetter: string = lowerLetters as string
        const seperateAll: string[] = options.split("");
        seperateAll.map((number: string) => {
            validateNumberCheckLetter.includes(number) ? "" : (validateNumberCheckSpecial.includes(number) ? "" : (lowerLetter.includes(number) ? "" : (fillme.includes(number) ? "" : (totalNumber += number))));
        })
        return totalNumber
    } else {
        throw new Error("Cannot empty")
    }
}
const Especial = (options: string): string => {
    if (!(options === "")) {
        let totalSpecial: string = "";
        const letterCheck: string = Eletter(options);
        const numberCheck: string = String(Enumber(options));
        const UpperCheck: string = upperConvert(letterCheck);
        const seperateAll: string[] = options.split("");
        seperateAll.map((special: string) => {
            letterCheck.includes(special) ? "" : (numberCheck.includes(special) ? "" : (UpperCheck.includes(special) ? "" : (totalSpecial += special)));
        })
        return totalSpecial;
    } else {
        throw new Error("cannot empty")
    }
}
const giveMeRandom = (value: number): number => {
    let randomnumber: number = Math.floor(Math.random() * value)
    return randomnumber;
}
const suffleMe = (data: (string | number)[]): (string | number)[] => {
    if (!(data.length == 0)) {
        const newData: (string | number)[] = [];
        const length: number = data.length;
        let random: number = giveMeRandom(length);
        let tol = length;
        let randomSaver: number[] = [];
        let returnRandom: (string | number)[] = [];
        let actual: number = 0;
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
        return newData
    } else {
        throw new Error("Cannot empty ")
    }
}
const RangeData = (Data: (string | number)[], initial: number, final: number): (string | number)[] => {
    if (Data.length < final) {
        throw new Error("Limit excessed")
    } else {
        let finalData: (string | number)[] = [];
        for (var i = initial; i <= final; i++) {
            finalData.push(Data[i]);
        }
        return finalData;
    }
}
const deleteData = (oldData: (string | number)[], position: number): (string | number)[] => {
    if (!(oldData.length == 0)) {
        oldData.splice(position, 1)
        return oldData
    } else {
        throw new Error("cannot empty")
    }
}

module.exports = { Eletter, ESletter, ESnumber, Enumber, Especial, giveMeRandom, suffleMe, RangeData, deleteData };
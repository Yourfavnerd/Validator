const validateText: string = "`~1234567890-= !@#$%^&*()_+[]{};':,./<>?\|";
const afterValidateText: string = '"';
const fillme: string = " ";
const checkEmail: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validateNumberCheckLetter: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const validateNumberCheckSpecial: string = "`~!@#$%^&*()_+-={[}}|\:;',<.>/?"
class Validator {
    upperConvert = (options: string): string => {
        if (!(options === "")) {
            const upperLetter: string = options.toUpperCase();
            return upperLetter;
        } else {
            throw new Error("Cannot empty")
        }
    }
    lowerConvert = (options: string): string => {
        if (!(options === "")) {
            const upperLetter: string = options.toLowerCase();
            return upperLetter;
        } else {
            throw new Error("Cannot empty")
        }
    }
    Eletter = (options: string): string => {
        if (!(options === "")) {
            let totalLetter: string = "";
            const seperateAll: string[] = options.split("");
            seperateAll.map((letter: string) => {
                validateText.includes(letter) ? "" : (afterValidateText.includes(letter) ? "" : (totalLetter += letter));
            })
            return this.lowerConvert(totalLetter)
        } else {
            throw new Error("Cannot empty")
        }
    }
    ESletter = (options: string): string => {
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
    Enumber = (options: string): number => {
        if (!(options === "")) {
            let totalNumber: string = "";
            let lowerLetters: string | 0 = this.lowerConvert(validateNumberCheckLetter);
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
    ESnumber = (options: string): string => {
        if (!(options === "")) {
            let totalNumber: string = "";
            const lowerLetters: string | 0 = this.lowerConvert(validateNumberCheckLetter);
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
    Especial = (options: string): string => {
        if (!(options === "")) {
            let totalSpecial: string = "";
            const letterCheck: string = this.Eletter(options);
            const numberCheck: string = String(this.Enumber(options));
            const UpperCheck: string = this.upperConvert(letterCheck);
            const seperateAll: string[] = options.split("");
            seperateAll.map((special: string) => {
                letterCheck.includes(special) ? "" : (numberCheck.includes(special) ? "" : (UpperCheck.includes(special) ? "" : (totalSpecial += special)));
            })
            return totalSpecial;
        } else {
            throw new Error("cannot empty")
        }
    }
    giveMeRandom = (value: number): number => {
        let randomnumber: number = Math.floor(Math.random() * value)
        return randomnumber;
    }
    suffleMe = (data: (string | number)[]): (string | number)[] => {
        if (!(data.length == 0)) {
            const newData: (string | number)[] = [];
            const length: number = data.length;
            let random: number = this.giveMeRandom(length);
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
                        random = this.giveMeRandom(length);
                        tol++;
                    }
                }
            }
            return newData
        } else {
            throw new Error("Cannot empty ")
        }
    }
    RangeData = (Data: (string | number)[], initial: number, final: number): (string | number)[] => {
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
    deleteData = (oldData: (string | number)[], position: number): (string | number)[] => {
        if (!(oldData.length == 0)) {
            oldData.splice(position, 1)
            return oldData
        } else {
            throw new Error("cannot empty")
        }
    }
    isEmail(email: string): boolean {
        return checkEmail.test(email);
    }
}
export default Validator
# Javascript user Value Extractor

### Install
    npm i userval-checker

### hot to use it ?

#### Function name present in this package ?
    1. Eletter = extract only Letters the from the string and return to the user
    2. Enumber = extract only numbers from the string and return to the user
    3. Especial = extract only the specials value from the string and return to the user
#### In javascript
    const {function_name} = require("userval-checker")
    ex. const {Eletter} = require("userval-checker);
    const extract_letter_from_string = Eletter({your_string_value})
    or
    const your_function_name= require("useval-checker")
    your_function_name.function_name({your_string_value})
### In React
    import {Eletter} from "userval-checker";

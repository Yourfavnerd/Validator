# Javascript user Value Extractor

### Install
```javascript
npm i userval-checker
```

### hot to use it ?

#### Function name present in this package ?

```javascript
1. Eletter = extract only Letters the from the string and return to the user
2. Enumber = extract only numbers from the string and return to the user
3. Especial = extract only the specials value from the string and return to the user
4. ESletter = gives the string after after filter without changing into upper or lowercase
5. ESnumber = gives the number type of string after after filter without changing into number
6. Enumber = gives the number after filter from the string
7. suffleMe = suffle the data of array and return a new array
8. RangeData = gives the data from certain ragnge to range from an array
9. deleteData = delete certain data from an array with position
```
#### In javascript
```javascript
const {function_name} = require("userval-checker")
ex. const {Eletter} = require("userval-checker);
const extract_letter_from_string = Eletter({your_string_value})
or
const your_function_name= require("useval-checker")
your_function_name.function_name({your_string_value})
```
### In React
```javascript
import {Eletter} from "userval-checker";
```

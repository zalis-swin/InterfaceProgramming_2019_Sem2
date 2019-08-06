"use strict";
// console.log("Hello World");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// let counter: number = 0;
// let myName: string = "Zali";
// let imBored: boolean = true;
// let planets: string[] = ["Earth", "Mars"];
// while(counter < 10){
//     console.log(counter);
//     counter++;
// }
var chalk_1 = __importDefault(require("chalk"));
var axios_1 = __importDefault(require("axios"));
//console.log(chalk.red('H') + chalk.yellow('e') + chalk.green('l') + chalk.cyan('l') + chalk.blue('o'));
function rainbowify(letters) {
    var count = 0;
    var colourcount = 0;
    var message = "";
    while (count < letters.length) {
        switch (colourcount % 6) {
            case 0: {
                message += chalk_1.default.red(letters[count]);
                break;
            }
            case 1: {
                message += chalk_1.default.yellow(letters[count]);
                break;
            }
            case 2: {
                message += chalk_1.default.green(letters[count]);
                break;
            }
            case 3: {
                message += chalk_1.default.cyan(letters[count]);
                break;
            }
            case 4: {
                message += chalk_1.default.blue(letters[count]);
                break;
            }
            case 5: {
                message += chalk_1.default.magenta(letters[count]);
                break;
            }
        }
        if (letters[count] != " ") {
            colourcount++;
        }
        count++;
        //six colours
    }
    return message;
}
console.log(rainbowify("hello cruel world"));
function itsWorking(response) {
    for (var index = 0; index < response.data.length; index++) {
        var element = response.data[index];
        console.log("Street Name: " + element.address.street + " | Zipcode: " + element.address.zipcode);
    }
}
function itsNotWorking(response) {
    console.error(response);
}
axios_1.default.get("https://jsonplaceholder.typicode.com/users")
    .then(itsWorking)
    .catch(itsNotWorking);

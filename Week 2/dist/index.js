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
console.log(rainbowify("yeehaw"));
// class Animal {
//     size: number;
//     name: string;
//     constructor(size: number, name: string){
//         this.size = size;
//         this.name = name;
//     }
// }
// class Dog extends Animal {
//     breed: string;
//     constructor(size: number, name: string, breed: string){
//         super(size, name);
//         this.breed = breed;
//     }
// }
// class Product {
//     id: string;
//     cost: number;
//     constructor(id: string, cost: number){
//         this.id = id;
//         this.cost = cost;
//     }
// }
// class Book extends Product {
//     title: string;
//     author: string;
//     constructor(t: string, a: string, id: string, cost: number){
//         super(id, cost);
//         this.title = t;
//         this.author = a;
//     }
//     getTitle(): string{
//         return this.title;
//     }
//     getAuthor(): string{
//         return this.author;
//     }
// }
// class BluRay extends Product {
//     title: string;
//     year: number;
//     constructor(t: string, y: number, id: string, cost: number){
//         super(id, cost);
//         this.title = t;
//         this.year = y;
//     }
//     getTitle(): string{
//         return this.title;
//     }
//     getYear(): number{
//         return this.year;
//     }
// }
// let book1: Book = new Book("Harry Potter", "J.K. Rowling", "ROW123", 100);
// let book2: Book = new Book("Bible", "Jesus", "god", 5);
// let bluray1: BluRay = new BluRay("Into the Spider-verse", 2018, "Miles", 20);
// let bluray2: BluRay = new BluRay("Napoleon", 1995, "best movie ever", 2);
// let total: number = book1.cost + book2.cost + bluray1.cost + bluray2.cost;
// console.log("Title: " + book1.title + " | Cost: " + book1.cost + " AUD");
// console.log("Title: " + book2.title + " | Cost: " + book2.cost + " AUD");
// interface TodoItem {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }
// function whenRespondedWithError(response: Error) {
//     console.error(response);
// }
// function whenResponded(response: AxiosResponse<TodoItem[]>){
//     for (let index = 0; index < response.data.length; index++) {
//         let element: TodoItem = response.data[index];
//         console.log(element.title);
//     }
// }
// axios.get("https://jsonplaceholder.typicode.com/todos")
//     .then(whenResponded)
//     .catch(whenRespondedWithError);
// interface Post {
//     userid: number;
//     id: number;
//     title: string;
//     body: string;
// }
// function responded(response: AxiosResponse<any>){
//     for (let index = 0; index < response.data.length; index++) {
//         let element: Post = response.data[index];
//         console.log(element.title);
//     }
// }
// function failure(response: Error){
//     console.error(response);
// }
// axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(responded)
//     .catch(failure);
// interface Geo {
//     lat: number;
//     lng: number;
// }
// interface Address {
//     street: string;
//     suit: string;
//     city: string;
//     zipcode: number;
//     geo: Geo;
// }
// interface Company {
//     name: string;
//     catchPhrase: string;
//     bs: string;
// }
// interface User {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     address: Address;
//     phone: number;
//     website: string;
//     company: Company;
// }
// function itsWorking(response: AxiosResponse<User[]>){
//     for (let index = 0; index < response.data.length; index++) {
//         let element: User = response.data[index];
//         console.log("Street Name: " + element.address.street + " | Zipcode: " + element.address.zipcode);
//     }
// }
// function itsNotWorking(response: Error){
//     console.error(response);
// }
// axios.get("https://jsonplaceholder.typicode.com/user")
// .then(itsWorking)
// .catch(itsNotWorking);

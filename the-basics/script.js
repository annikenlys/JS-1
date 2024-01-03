//Variables

var myName = "Anniken";
console.log(myName); // Output : Anniken


let age = 29;
console.log(age); // Output : 29
console.log(typeof age);

const MAKE = "Gucci";
console.log(MAKE); // Output : Gucci


// Data Types

let greeting = "Hello, World";
console.log(typeof greeting);

let isHappy = true;
console.log(isHappy);
console.log(typeof isHappy); // Outputs : boolean

let someVar;
console.log(typeof someVar); // Outputs : undefined

let emptyValue = null;
console.log(typeof emptyValue); // Output : null


// Object

let person = {
    firstName: "Anniken",
    lastName: "Lysø",
    age: 29
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);


//Create an object for a car
let car = {
    make: "Volvo",
    year: 1992,
    condition: "used",
    price: 10000
};

console.log(car);
console.log(car.make); // Output : Volvo
console.log(car.year); // Output : 1992
console.log(car.condition); // Output : used
console.log(car.price); // Output : 10k

console.log("I have a "
    + car.make + " and it is "
    + car.year + " and it is "
    + car.condition + " the price is "
    + car.price);

console.log(`i have a ${car.make} and it is ${car.year} and it is ${car.condition} and the price is ${car.price}`);


// Array
let random = [
    19946, // 0
    "Green", // 1
    {name: "Anniken", age: 29}, // 2
    ["Girl", "Cat"] // 3
];

console.log(random[0]); // First item in the array

console.log(random[1]); // second item in the array


// 3. Type Conversion

let year = "1993"; // String
console.log(year);

// From string to number

let convertedYear = parseInt(year);
console.log(convertedYear);

// Convert number to string

let  num = 456;

console.log(num.toString());

let convertedNumber = num.toString();

console.log(convertedNumber);

// TASK
var city = "Barcelona";
console.log(city);

let myAge = 29;
console.log(myAge);

const birthYear = 1994;
console.log(birthYear);

let greetings = "Hi, Welcome!";
console.log(greetings);

let quantity = 789;
console.log(quantity);

let isJavaScriptFun = true;
console.log(isJavaScriptFun);

let thisIsUndefined;
console.log(thisIsUndefined);

let emptyValue2 = null;
console.log(emptyValue2);

let numString = "25";
console.log(numString);

let numb = parseInt(numString);
console.log(numb);

let numb2 = 50;
console.log(numb2);

let numbString2 = numb2.toString();
console.log(numbString2);

console.log(numb + numb2);

console.log(numString + numbString2);
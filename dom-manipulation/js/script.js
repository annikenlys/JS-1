// SELECT ELEMENTS

// querySelector
// querySelectorAll
// getElementById


// 1. Select the heading h2

const heading2 = document.querySelector("h2");
console.log(heading2);


// 2. Select element with class .heading2

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);


// 3. Select the element with id #list using querySelector

const list = headingById = document.querySelector("#list");
console.log(list);


// 4. Select element with id #list using getElementById

const list2 = document.getElementById("list");
console.log(list2);


// 5. selecting single li

const listItem = document.querySelector("li");
console.log(listItem);


// 6. Select multiple li's

const listItems = document.querySelectorAll("li");
console.log(listItems);


// Select the h1 and change the color to be red

const heading1 = document.querySelector("h1");
console.log("before I do my change");
// console.log("first heading ", heading1);
console.dir(heading1);
heading1.style.color = "Red";
heading1.style.border = "5px solid purple";
heading1.style.padding = "1rem";
heading1.style.backgroundColor = "pink";


//Select the div and add a class .container to it
const myDiv = document.querySelector("div");
// console.log("myDiv: ", myDiv);
console.dir(myDiv);

myDiv.classList.add("container");


// Change the heading text
heading1.innerHTML = "Hello people";

heading2.innerHTML = `<span class="green">Greetings<span/>`;

//                           0           1         2
const myArray0fNames = ["Karoline", "Anniken", "Stine", "Berta"];

// console.log(myArray0fNames[0]);
// console.log(myArray0fNames[1]);
// console.log(myArray0fNames[2]);

for (let i = 0; i < myArray0fNames.length; i++) {
    console.log(myArray0fNames[i]);
}

// 1 = 0
// 0 < 4
// i = 0 + 1 = 1



//ARITHMETIC OPERATORS

// = + ++


// Addition

// 10 + 5 = 15
        // <<<< 15
let sum = 10 + 5;
console.log(sum);


// Subtraction ( - )

// 10 - 5 = 5

let difference = 10 - 5;
console.log("difference: ", difference);


// Multiplication

// 10 * 5 // 50

let product = 10 * 5;
console.log(product);


// Division

// 10 / 5 = 2

let result = 10 / 5;
console.log(result); //2


// Modulus

let remainder = 10 % 4; // remainder is 2
console.log(remainder);



// SIMPLE OPERATORS

// Simple assignment

let a = 5;


// Addition assignment (+=)

let b = 10;

b += 5; // b is now 15
// shorthand for:  b = b + 5;


// Subtraction assignment (-=)

let c = 15;

c -= 5; // 10
// shorthand for:  c = c - 5;



// COMPARISON OPERATORS

// equal to (==)

let isEqual = (5 == "5");
// True
console.log("isEqual: ", isEqual);


// Strict equal (===)

let isStrictEqual = (5 === "5"); // false

console.log(isStrictEqual);


// Not equal (!=)

// 5 != 6 // true
let isNotEqual = (5 != "6"); // true
console.log(isNotEqual);


// Greater than (>)

// 10 > 5 //

let isGreaterThan = (10 > 5); // true
console.log("isGreaterThan");

// <
//10 >= 10 // true
// >=
// <=


// AND  // OR
// &&   // ||

// NOT
// !

// Create a function in calculator
// app to sum three numbers

// function addThreeNumbers (num1, num2, num3) {
//     return num1 + num2 + num3;
// }
//
// let result= addThreeNumbers(10, 20, 50);
//
// console.log("result: ", result);
//
// // Task
//
// function multiplyThreeNumbers (num1, num2, num3){
//     return num1 * num2 * num3;
// }
//
// let productResult = multiplyThreeNumbers(200, 300, 400);
//
// console.log("productResult: ", productResult);

// 1. please select the heading h1 and when I click on the btn "change heading"
// change it to be "it's a god i dag"
// 2. when i click on the BTN "change colours" I would like to change the
// background color of the body to be blue
// and the heading h1 to be green

// Answer 1
// Selecting

let heading = document.querySelector("h1");
// console.log("heading: ", heading);

let button = document.querySelector("button");
// console.log("button: ", button);

let buttonColours = document.querySelector(".colours");
// console.log("buttonColours: ", buttonColours);

let body = document.querySelector("body");

// console.log("body: ", body);


function changeHeading() {
    heading.innerHTML = "it's a god i dag";
}

// Connect the function to the button ->

button.onclick = changeHeading;
//Remove round brackets

// Answer 2
function changeColours() {
    body.style.backgroundColor = "blue";
    heading.style.color = "orange";
}

buttonColours.onclick = changeColours;

// Functions inside object

const pet = {
    type: "Cat",
    name: "Johnson",
    age: "3",
    isFriendly: false,
    meow: function () {
        console.log("Sometimes I'm alone, sometimes I'm not, Hello?")
    }
};

console.log("Type: ", pet.type);

// pet.meow();

const catBtn = document.querySelector(".cat-button");
console.log("catBtn: ", catBtn);



// Q1

// Function expression
const someFunction = function () {
    console.log("Hello, friend");
}

someFunction();

saySomethingFunction();

// Normal function
function saySomethingFunction() {
    console.log("Heyoooo");
}

//Q2

//addEventListener
//Select the .btn

const button = document.querySelector(".btn");

// way 1

button.addEventListener("click", function () {
    console.log("you clicked me");
});

button.addEventListener("click", handleClick);

function handleClick() {
    console.log("you clicked me");
}

// way 2

button.onclick = function () {
    console.log("You clicked me using onClick");
}

button.onclick = function (event) {
    console.log(event.target.value);
    console.log(this.value);
}

// Q3 key press

// onKeyDown // The event will be triggered when you press
// onKeyUp // The event will be triggered when you release the key
// The onKeyPress (Most used)

const myFirstNameInput = document.querySelector("#firstName");

console.log("myFirstNameInput", myFirstNameInput);

const handleKeyPress = function () {
    console.log("key is pressed");
    console.log(this.value);
    console.log(event.traget.value);
}

myFirstNameInput.addEventListener("keydown", handleKeyPress);

const theHoverBtn = document.querySelector(".pet-btn");

const handleMouseOver = function (event) {
    console.log("event.target.dataset.animal:", event.target.dataset.animal);
    event.target.style.background = "Blue";
}

function handleMouseOut(event) {
    event.target.style.background = "none";
}

theHoverBtn.addEventListener("mouseout", handleMouseOut);
theHoverBtn.addEventListener("mouseover", handleMouseOver);

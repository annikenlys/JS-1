// H1
const heading1 = document.querySelector("h1");
console.dir(heading1);

heading1.style.color = "blue";
heading1.style.fontSize = "2rem";
heading1.innerHTML = "Welcome to JavaScript Class";

// Select the BTN

const myBtn = document.querySelector("button");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

myBtn.addEventListener("click", function () {
    let someRandomNumber = getRandomInt(220);

    list.innerHTML += `<li>New Item ${someRandomNumber}</li>`
    // list.innerHTML = list.innerHTML +  `<li>New Item</li>`
});
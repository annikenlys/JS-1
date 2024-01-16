//SET INTERVAL

// The setInterval() method continues calling the function
// until clearInterval() is called, or the window is closed.
// -->
// myInterval = setInterval(function, milliseconds);
// clearInterval(myInterval);

let count = 0;

const intervalId = setInterval(function () {
    console.log("Hello, friend");
    count++ //increment
    if (count === 5) {
        clearInterval(intervalId);
    }
}, 1000);

// example with list
const container = document.querySelector(".container");

let counter = 0

const ulIntervalId = setInterval(function (){
    counter++;
    container.innerHTML += `
    <li>Greta Thunberg the ${counter}.</li>
    `
    if(counter === 7 ){
        clearInterval(ulIntervalId);
    }

}, 1000);

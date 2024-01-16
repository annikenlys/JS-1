// setTimeout

// it is a method ( function )
// used to execute a function
// after a specific period of time


// 1.

setTimeout(function () {
    console.log("Hello Jack");
}, 3000);

// or

setTimeout(logHello, 3000);


function logHello() {
    console.log("Hello Jack two");
}

// 1. select the element with class .loader

const loading = document.querySelector(".loader");
console.log("loader element", loading);

// 2. use the setTimeout

setTimeout(function () {
    // 3. change the inner HTML of the loading
    loading.innerHTML = "downloading complete";
}, 3000);


// Countdown
let timeLeft = 10;

function countdown() {
    timeLeft--;
    document.querySelector(".counter").innerHTML = String(timeLeft);
    if (timeLeft > 0) {
        setTimeout(countdown, 1000);
    }
    console.log("time left: ", timeLeft)
}

setTimeout(countdown, 1000);

// 1. select container of the ad
const offer = document.querySelector(".ad");
console.log("offer", offer);

// 2. setTimeout
setTimeout(function () {
    offer.style.display = "block";
}, 3000);

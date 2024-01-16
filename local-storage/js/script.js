// Local Storage
// Session Storage

const myVariable = "Some text";

window.localStorage.setItem("variableOne", myVariable);

window.localStorage.setItem("Name", "Anniken");

//Save Objects
//Save Arrays

let car = {
    make: "Mercedes",
    model: "1999",
    price: 200000
}

window.localStorage.setItem("MyCar", JSON.stringify(car));

window.sessionStorage.setItem("fav", "Mercedes");

// TASK

// use local storage
// create three items there
// first is a variable string one
// second is a object
// third is an array


let puddingFlavour = "Chocolate";
window.localStorage.setItem("puddingFlavour:", puddingFlavour);

let coffee = {
    origin: "South Africa",
    intensity : "medium 7"
}



let shoppingList = ["coffee", "jam", "milk"];
//
//
// store the data in the localstorage
//
// adn then get the items from the local storage
//
// please use JSON.stringify and JSON.parse

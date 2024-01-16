const myName = window.localStorage.getItem("name");

console.log("myName: ", myName);

const myCar = window.localStorage.getItem("myCar");
console.log(myCar);

// Parse

const myCarParsed = JSON.parse(myCar);
console.log(myCarParsed);

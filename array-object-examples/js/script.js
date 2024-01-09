// // ARRAYS
//
// // position of the items in the Array:
// //              0          1        2
// const fruits = ["Melon", "Litchy", "Oranges"];
//
// // The total items in the array:
// console.log(fruits.length);
//
// // Add more items to the array:
// fruits.push("Mango");
//
// console.log(fruits);
//
// // Change the index(position) of the item:
//
// // Adding ned item in the beginning of the array:
// fruits.unshift("grapes");
// console.log(fruits);
//
// //Remove the last item in the array:
// fruits.pop();
// console.log("Using pop : ", fruits);
//
// // Remove the first item in the array:
// fruits.shift();
// console.log("Using shift : ", fruits);
//
// // JS see a string as an array:
// //            0 1 2
// let animal = "Cat";
// console.log(animal.length);
//
// //             0           1        2
// const cars = ["Mercedes", "Toyota", "Tesla"];
// console.log("The index of Toyota is : ", cars.indexOf("Toyota"));

//How to find item in Array:
// .find

// const user = {
//     name: "Tom",
//     age: "70",
//     job: "Dancer",
//     wealth: 89000000000
// }
//
// console.log(user);
//
// console.log(user.age);
// console.log(user.name);
// console.log(user.wealth);
//
// const someText = "Hi, my name is " + user.name;
// console.log(someText);
//
// const someTextTwo = `Hi, my name is ${user.name}`;
// console.log(someTextTwo);

const user2 = {
    name: "Monde",
    age: 30,
    job: "software engineer",
    wealth: 33424576858474
}

const text = `Hello, my name is ${user2.name}. I am ${user2.age}, work as a ${user2.job} and my wealth is ${user2.wealth} dollars`;
console.log("text: ", text);

// Object of books:
const books = [
    {
        title: "The Hobbit",
        Author: "J. R. R. Tolkien",
        pages: "310"
    },
    {
        title: "Drive",
        Author: "Olivia Bond",
        pages: "1001"
    },
    {
        title: "One thousand and one nights",
        Author: "Unknown",
        pages: "3000"
    }
]

// console.log("My first book ", books[0]);
// console.log("My second book ", books[1]);
// console.log("My third book ", books[2]);

// const searchBook = books.find(function (book) {
//     return book.title === "The Hobbit";
// });

const searchBook = books.filter(function (book) {
    return book.pages > 500;
});

console.log("searchBook: ", searchBook);

// Function is a set of actions or code run
// when we call this function name

function doorRing(withCamera) {
    console.log("I will go open the door: " + withCamera);
}

doorRing("Someone is outside");

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const sum = addTwoNumbers(10, 20);

console.log("sum: ", sum);

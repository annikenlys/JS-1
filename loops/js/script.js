// LOOPING / ITERATION

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// --> loop is for repeating

// for ( initialization; condition; increment; ) {}
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// i = 0
// true
// i = 1

// i = 1
// true
// console.log(1)
// 1 + 1 = 2
// i = 2

// i = 2
// true
// console.log(2)
// increment 2 + 1
// i = 3

//true
// 3 + 1
// console.log(3)

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

//             0        1           2           3
const cars = ["Tesla", "Ferrari", "Mercedes", "Porsche"];

console.log(cars.length);

const totalNumberOfCars = cars.length;

// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);

for (let i = 0; i < totalNumberOfCars; i++) {
    console.log(cars[i]);
}

// Task

const fruits = ["Watermelon", "Pineapple", "Kiwi", "Peach",];

for (let x = 0; x < fruits.length; x++){
    console.log(fruits[x]);
}

console.log(fruits[2]);

// Select the last item in the array
console.log("the length of the array , total number of items in the array", fruits.length);

console.log(fruits.length - 1);


const lastItemInTheArray = fruits.length - 1;
console.log(fruits[lastItemInTheArray]);


const totalFruits = fruits.length;
console.log("totalFruits: ", totalFruits);

console.log(fruits[totalFruits - 1]);
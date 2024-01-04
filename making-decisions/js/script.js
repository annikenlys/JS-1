console.log("here");


// 1. If and else statements

let temp = 34;

if (temp > 30) {
    console.log("Very hot!!");
} else if (temp > 20) {
    console.log("Temp is nice!!");
} else {
    console.log("Very cold!!");
}


// At school my students had an exam. some students
// got score high and low. i want to write an
// if else statement to check if the score is high
// or low.
// of the score is less than 50 then the students
// fails
// the score is more than or equal 50 then the student
// passed


// please use the variable score to do your condition


let score = 60;
console.log("You got a score of: \n" + score);

if (score >= 50) {
    console.log("Pass");
} else {
    console.log("fail");
}


// 2. Switch case

let color = "yellow";

// if (color === "red") {
//     console.log("Stop!");
// }

switch (color) {
    case "red":
        console.log("Stop!!");
        break;
    case "yellow":
        console.log("Get ready!");
        break;
    case "Green":
        console.log("Go!!");
        break;
    default:
        console.log("Anarchy!!");
}

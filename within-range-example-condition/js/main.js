// Search for item in array
function find(arr, value) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return arr[i];
        }
    }
    return -1;
}

const myArray = [1, 2, 3, 18, 1000]
const valueToSearchFor = 18;
let isNumber = find(myArray, valueToSearchFor);

// test
console.log("isNumber: ", isNumber);

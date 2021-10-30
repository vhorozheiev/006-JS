/* Write a JavaScript function to get the last element of an
array */

let array = ["apple", "orange", "peach", "lemon"];

function getLastElement(array) {
    try {
        if (array.length == 0) {
            throw new Error();
        } else {
            console.log(array[array.length - 1]);
            //console.log(array.slice(-1));
        }
    } catch (error) {
        console.log("Please, enter array with minimum one element");
    }
}
getLastElement(array);


// /* Write a simple JavaScript program to join all elements of the
// following array into a string */

// let array = ["apple", "orange", "peach", "lemon"];

// function joinArrayToString(array) {
//     return array.join(",");

// }
// console.log(joinArrayToString(array));



// /* There are two arrays with individual values, write a
// JavaScript program to compute the sum of each individual
// index value from the given arrays and save them to third
// array */

// let firstArray = [1, 2, 3, 4, 5, 6, 7, 8];
// let secondArray = [11, 12, 13, 14, 15, 16, 17, 18, 19];

// function getSumOfIndex(firstArray, secondArray) {
//     let counter = 0;
//     let res = [];
//     while (counter < firstArray.length && counter < secondArray.length) {
//         res.push(firstArray[counter] + secondArray[counter]);
//         counter++;
//     }
//     if (counter == firstArray.length) {
//         for (let i = counter; i < secondArray.length; i++) {
//             res.push(secondArray[i]);
//         }
//     } else if (counter == secondArray.length) {
//         for (let i = counter; i < firstArray.length; i++) {
//             res.push(firstArray[i]);
//         }
//     }
//     return res;
// }
// console.log(getSumOfIndex(firstArray, secondArray));


// /* Write a JavaScript program to calculate the area and
// perimeter of a rectangle. Rectangle should be an object with
// properties width and height and methods getArea() and
// getPerimeter(); */

// let rectangle = {
//     width: 50,
//     height: 100,
//     getArea() {
//         if (this.width <= 0 || this.height <= 0) { throw new Error("Width or heigth cannot be <= 0") }
//         return this.width * this.height;
//     },
//     getPerimeter() {
//         if (this.width <= 0 || this.height <= 0) { throw new Error("Width or heigth cannot be <= 0") }
//         return (this.width + this.height) * 2;
//     }
// }
// console.log(rectangle.getArea());
// console.log(rectangle.getPerimeter());
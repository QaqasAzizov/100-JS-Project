"use strict";

const NumArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 3, 5, 7, 9, -1, -15, -30, -3,
];

// for (let i = 0; i <= 10; i++) {
//   let count = 0;
//   NumArray.forEach((item) => {
//     if (item == i) {
//       count++;
//     }
//   });
//   console.log(`${i}-den ${count} ededdir`);
// }

// let max = numbers[0];

// for (let i = 0; i < NumArray.length; i++) {
//   if (NumArray[i] > max) {
//     min = NumArray[i];
//   }
// }

// console.log(NumArray);

// const product_1 = {
//   id: 1,
//   price: 110,
// };
// const product_2 = {
//   id: 2,
//   price: 120,
// };
// const product_3 = {
//   id: 3,
//   price: 130,
// };
// const product_4 = {
//   id: 4,
//   price: 140,
// };
// const product_5 = {
//   id: 5,
//   price: 150,
// };
// const product_6 = {
//   id: 6,
//   price: 160,
// };
// const product_7 = {
//   id: 7,
//   price: 170,
// };

// const array = [
//   product_1,
//   product_2,
//   product_3,
//   product_4,
//   product_5,
//   product_6,
//   product_7,
// ];

// let sum = 0;
// let count = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i].id % 2 != 0) {
//     sum += array[i].price;
//     count++;
//   }
// }

// console.log(`Ededi orta => ${sum / count}`);

// let a = +prompt(`your first number`);
// let b = +prompt(`your second number`);

// while (a < 50 && b < 50) {
//   a = +prompt("a=> ");
//   b = +prompt("b => ");
// }

// console.log(a+b);

let myArray = [];
let sum = 0;

while (sum < 100) {
  let numbers = +prompt("Enter a number");
  sum += numbers;
  myArray.push(numbers);
  sum++;
}

let newArr = numArr.map

console.log(sum);
console.log(myArray);

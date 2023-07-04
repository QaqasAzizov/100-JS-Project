"use strict";

// console.log(Math.floor(-12.98));
// console.log(Math.floor(12.5));

// console.log(Math.ceil(-19.2));

// console.log(Math.round(3.5));

// console.log(Math.trunc(-1.123123));

// console.log(Math.floor(-4.14));
// console.log(Math.trunc(-4.14));

// console.log(Math.pow(4, 8));
// console.log(Math.pow(2, 5));
// console.log(Math.pow(2, -3));

// console.log(Math.max(12, 3, 4, 5, 6123, 123, 5, 15));

// console.log(Math.sign(0));

// console.log(Math.trunc(Math.random() * 10) + 1);

// console.log(Math.floor(Math.random() * 256));

const btn = document.getElementById("btn");

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 256);
};

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
  // document.body.style.backgroundColor = `#000`;
});

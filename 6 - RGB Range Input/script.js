"use strict";

const inputs = document.querySelectorAll("input");
const colorEl = document.querySelector("#color");

for (let i = 0; i < inputs.length; i++) {
  const red = inputs[0];
  const green = inputs[1];
  const blue = inputs[2];
  inputs[i].addEventListener("input", () => {
    console.log(red.value, green.value, blue.value);

    colorEl.textContent = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  });
}

"use strict";

const counterEl = document.getElementById("counter");
const btns = document.querySelectorAll("button");

let counter = 0;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (event) => {
    if (event.target.classList.contains("decrease")) {
      counter--;
    } else {
      counter++;
    }

    counterEl.innerHTML = counter;

    if (counter > 0) {
      counterEl.style.color = "green";
    } else if (counter < 0) {
      counterEl.style.color = "red";
    } else {
      counterEl.style.color = "white";
    }
  });
}

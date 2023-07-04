"use strict";

const colors = document.querySelector(".color");
const containerEl = document.querySelector(".container");

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("mouseover", (event) => {
    event.target.classList.add("active");
  });
  colors[i].addEventListener("mouseleave", (event) => {
    event.target.classList.remove("active");
  });
}

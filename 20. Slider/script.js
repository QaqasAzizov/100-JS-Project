"use strict";

const leftBtn = document.getElementById("left__btn");
const rightBtn = document.getElementById("right__btn");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let index = 0;
const slideCount = slides.length;

rightBtn.addEventListener("click", () => {
  console.log("test")
  index++;
  console.log(index)
  if (index >= slides.length - 2) {
    index = 0;
  }

  slider.style.transform = `translateX(${-index * 310}px)`;
});

leftBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length - 3;
  }

  slider.style.transform = `translateX(${index * 310}px)`;
});

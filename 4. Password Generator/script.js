"use strict";

// Data
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const special = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

// Modal and Backdrop
const backdropEl = document.querySelector(".backdrop");
const modalEl = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal h2");
const modalMessage = document.querySelector(".modal p");
const modalBtn = document.querySelector(".modal button");
// Password
const passwordEl = document.querySelector(".password");
// Input Elements
const upperInput = document.getElementById("uppercase");
const lowerInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

// Counter
const counterBtns = document.querySelectorAll(
  ".generator__length-counter button"
);
const counterEl = document.querySelector(".generator__length-counter span");
const [decreaseBtn, increaseBtn] = counterBtns;

// Generate and Copy
const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-btn");

let counter = 6;
counterEl.textContent = counter;

decreaseBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (counter > 6) {
    counter--;
  }
  counterEl.textContent = counter;
});

increaseBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (counter < 20) {
    counter++;
  }
  counterEl.textContent = counter;
});

copyBtn.addEventListener("click", function (event) {
  event.preventDefault();
  modalEl.classList.add("active");
  backdropEl.classList.add("active");

  if (passwordEl.textContent) {
    modalTitle.textContent = "Success";
    modalMessage.textContent = "Password successfully copied to clipboard";
  } else {
    modalTitle.textContent = "Error";
    modalMessage.textContent = "There is nothing to copy to clipboard";
  }
});

backdropEl.addEventListener("click", function () {
  backdropEl.classList.remove("active");
  modalEl.classList.remove("active");
});

modalBtn.addEventListener("click", function (event) {
  event.preventDefault();
  backdropEl.classList.remove("active");
  modalEl.classList.remove("active");
});

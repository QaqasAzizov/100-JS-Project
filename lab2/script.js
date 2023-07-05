"use strict";

const BtnModal = document.querySelector(".myModal");

const openModal = () => {
  BtnModal.classList.remove("isHidden");
};


const closeModal = () => {
    BtnModal.classList.add("isHidden");
  };

const iEl = document.querySelectorAll("i");
const imaged = document.querySelector(".myModal img");
const xModal = document.querySelector(".x-modal i");

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    closeModal();
  }
});

iEl.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const imgd = document.querySelector(`.${e.target.classList[0]}`);
    console.log(imgd.previousElementSibling.src);
    imaged.src = imgd.previousElementSibling.src;
    openModal();
  });
});

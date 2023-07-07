"use strict";
const insert = document.getElementById("insert");
const keyPressEl = document.querySelector(".keyPress");
const keysEl = document.querySelector(".keys");
const keys = document.querySelectorAll(".key span");
const [key , code , keyCode] = keys

window.addEventListener("keydown", (event) => {
  keyPressEl.classList.add("hidden");
  keysEl.classList.remove("hidden");
  key.textContent = event.key === ` ` ? "Space" : event.key;
  code.textContent = event.code;
  keyCode.textContent = event.keyCode;
});

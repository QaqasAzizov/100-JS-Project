"use strict";

const product_1 = {
  name: "White T-Shirt",
  category: "T-Shirt",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/t-shirt 1.webp",
};
const product_2 = {
  name: "Gray T-Shirt",
  category: "T-Shirt",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/t-shirt 2.webp",
};
const product_3 = {
  name: "Blue T-Shirt",
  category: "T-Shirt",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/t-shirt 3.webp",
};
const product_4 = {
  name: "Green Cap",
  category: "Cap",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/cap 1.webp",
};
const product_5 = {
  name: "White Cap",
  category: "Cap",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/cap 2.webp",
};
const product_6 = {
  name: "Black Cap",
  category: "Cap",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/cap 3.webp",
};
const product_7 = {
  name: "G1",
  category: "Glasses",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/glasses 1.webp",
};
const product_8 = {
  name: "G2",
  category: "Glasses",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/glasses 1.webp",
};
const product_9 = {
  name: "G3",
  category: "Glasses",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/glasses 3.webp",
};
const product_10 = {
  name: "Brown Shoes",
  category: "Shoes",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/shoes 1.webp",
};
const product_11 = {
  name: "White Shoes",
  category: "Shoes",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/shoes 2.webp",
};
const product_12 = {
  name: "White Shoes",
  category: "Shoes",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/shoes 3.webp",
};
const product_13 = {
  name: "Apple Watch",
  category: "Watch",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/Watch 1.webp",
};
const product_14 = {
  name: "Samsung Watch",
  category: "Watch",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/Watch 2.webp",
};
const product_15 = {
  name: "Huawei Watch",
  category: "Watch",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus",
  image: "images/Watch 3.webp",
};

const productArray = [
  product_1,
  product_2,
  product_3,
  product_4,
  product_5,
  product_6,
  product_7,
  product_8,
  product_9,
  product_10,
  product_11,
  product_12,
  product_13,
  product_14,
  product_15,
];

const box = document.querySelector(".box");
const items = document.querySelectorAll(".menu-item");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", (e) => {
    e.preventDefault();
    box.innerHTML = "";

    for (let j = 0; j < productArray.length; j++) {
      if (productArray[j].category == items[i].innerText) {
        let structure = `<div class="box">
        <div class="image">
        <img src="${productArray[j].image}" style="width:"/></div>
        <div class="name">${productArray[j].name}</div></div>`;
        box.innerHTML += structure;
      }
    }
  });
}
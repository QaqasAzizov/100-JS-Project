"use strict";

const users = [
  {
    name: { title: "Mr", first: "Nikolaj", last: "Hansen" },
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
    location: {
      city: "Bykle",
      country: "Norway",
    },
  },
  {
    name: { title: "Mr", first: "Alexis", last: "Hale" },
    picture: "https://randomuser.me/api/portraits/men/2.jpg",
    location: {
      city: "Canberra",
      country: "Australia",
    },
  },
  {
    name: { title: "Mr", first: "Connor", last: "Bradford" },
    picture: "https://randomuser.me/api/portraits/men/3.jpg",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
  },
  {
    name: { title: "Mr", first: "Sidney", last: "Poole" },
    picture: "https://randomuser.me/api/portraits/men/4.jpg",
    location: {
      city: "Copenhagen",
      country: "Denmark",
    },
  },
  {
    name: { title: "Ms", first: "Alexia", last: "Mills" },
    picture: "https://randomuser.me/api/portraits/women/4.jpg",
    location: {
      city: "Nassau",
      country: "Bahamas",
    },
  },
  {
    name: { title: "Ms", first: "Tiana", last: "Rivers" },
    picture: "https://randomuser.me/api/portraits/women/5.jpg",
    location: {
      city: "Washington D.C.",
      country: "United States",
    },
  },
  {
    name: { title: "Ms", first: "Haydn", last: "Hoffman" },
    picture: "https://randomuser.me/api/portraits/women/6.jpg",
    location: {
      city: "Dublin",
      country: "Ireland",
    },
  },
  {
    name: { title: "Ms", first: "Emmy", last: "Arroyo" },
    picture: "https://randomuser.me/api/portraits/women/7.jpg",
    location: {
      city: "Stockholm",
      country: "Sweden",
    },
  },
  {
    name: { title: "Ms", first: "Lyra", last: "Spencer" },
    picture: "https://randomuser.me/api/portraits/women/8.jpg",
    location: {
      city: "Madrid",
      country: "Spain",
    },
  },
  {
    name: { title: "Ms", first: "Delilah", last: "Dyer" },
    picture: "https://randomuser.me/api/portraits/women/9.jpg",
    location: {
      city: "Bern",
      country: "Switzerland",
    },
  },
];

const UserEl = document.getElementById("result");
const input = document.getElementById("filter");
const li = document.getElementsByClassName("li");

const list = [];

const getData = () => {
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src = "${user.picture}" alt ="${user.name.first}">
    <div class = "user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city},${user.location.country}</p>
    </div>`;
    list.push(li);
    UserEl.append(li);
  });
};

getData();

const Filter = (searchTerm) => {
  list.forEach((li) => {
    if (li.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      li.classList.remove("hide");
    } else {
      li.classList.add("hide");
    }
  });
};

input.addEventListener("input" ,(event) =>{
    Filter(event.target.value)
})
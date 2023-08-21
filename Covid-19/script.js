"use strict";

const search = document.getElementById("input");
const ulReg = document.querySelector(".allData");
const countName = document.querySelector(".country-name");

let data;

const getData = (searchedValue) => {
  fetch("https://api.api-ninjas.com/v1/covid19?country=" + searchedValue, {
    headers: {
      "X-API-KEY": "14I46t10KHlTvs2qL1wcKQ==y84nxuztnx838eMd",
    },
  })
    .then((response) => response.json())
    .then((datas) => {
      data = datas;
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

search.addEventListener("input", (e) => {
  getData(e.target.value.trim());
});

const displayAll = (data) => {
  ulReg.innerHTML = "";
  countName.innerText = search.value.trim();

  data.forEach((regions) => {
    console.log(regions);
    const p = document.createElement("p");
    p.className = "region";
    p.textContent =
      regions.region == "" ? `No Region` : `Region: ${regions.region}`;
    const country = document.createElement("div");
    ulReg.append(p, country);

    for (const cases in regions.cases) {
      const total = regions.cases[cases].total;
      const newC = regions.cases[cases].new;

      const countryCont = document.createElement("div");
      const img = document.createElement("img");
      const pDate = document.createElement("p");
      const pTotal = document.createElement("p");
      const pNew = document.createElement("p");

      country.append(countryCont);
      countryCont.append(img, pDate, pTotal, pNew);
      // ulReg.append(country);

      country.className = "country";
      countryCont.className = "country-cont";
      pDate.className = "date";
      pTotal.className = "total";
      pNew.className = "new";
      img.src = "/covid-removebg-preview.png";

      pDate.textContent = `Date: ${cases}`;
      pTotal.textContent = `Total: ${total}`;
      pNew.textContent = `New: ${newC}`;
    }
  });
};
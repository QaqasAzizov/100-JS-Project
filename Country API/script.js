"use strict";

const allCountriesEl = document.querySelector(".all-countries");
const select = document.getElementById("regions");
const selectPop = document.getElementById("population");
const selectLetter = document.getElementById("letter");

let data;

const getData = (searchedValue) => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((datas) => {
      data = datas;
      displayCountries(data);
      // filterPopulation(data);
      // filterRegion(data);
      // filterArea();
      filterAll(data);
      console.log(data);
    });
};
getData();

const displayCountries = (data) => {
  data.forEach((each) => {
    const country = document.createElement("div");
    const countryImg = document.createElement("img");
    const h2 = document.createElement("h2");
    const countryDetails = document.createElement("div");
    const countryCap = document.createElement("p");
    const countryCapSp = document.createElement("span");
    const countryReg = document.createElement("p");
    const countryRegSp = document.createElement("span");
    const countryPop = document.createElement("p");
    const countryPopSp = document.createElement("span");
    const countryCio = document.createElement("p");
    const countryCioSp = document.createElement("span");
    const countryArea = document.createElement("p");
    const countryAreaSp = document.createElement("span");

    countryImg.src = each.flags.png;
    h2.textContent = each.name.common;
    countryCap.textContent = "Capital:";
    countryReg.textContent = "Region:";
    countryPop.textContent = "Pop:";
    countryCio.textContent = "Cio:";
    countryArea.textContent = "Area:";

    country.append(countryImg, h2, countryDetails);
    countryDetails.append(
      countryCap,
      countryReg,
      countryPop,
      countryCio,
      countryArea
    );

    country.className = "country";
    h2.className = "country-name";
    countryDetails.className = "country-details";
    countryCap.className = "country-capital";
    countryReg.className = "country-region";
    // countryLan.className = "country-language";
    countryPop.className = "country-Population";
    countryCio.className = "country-cioc";
    countryCio.className = "country-area";
    countryDetails.className = "country-details";

    countryCapSp.textContent = each.capital ? each.capital : "N/A";
    countryRegSp.textContent = each.region ? each.region : "N/A";
    countryPopSp.textContent = each.population
      ? each.population.toLocaleString()
      : "N/A";
    countryCioSp.textContent = each.cioc ? each.cioc : "N/A";
    countryAreaSp.textContent = each.area
      ? `${each.area.toLocaleString()}km²`
      : "N/A";

    countryCap.append(countryCapSp);
    countryReg.append(countryRegSp);
    countryPop.append(countryPopSp);
    countryCio.append(countryCioSp);
    countryArea.append(countryAreaSp);

    allCountriesEl.append(country);
  });
};

const filterAll = (data) => {
  getSellectedData(select, data);
  getSellectedData(selectPop, data);
  // getSellectedData(selectLetter, data);
};

const getSellectedData = (inputt, data) => {
  let filteredData = data;

  inputt.addEventListener("change", (e) => {
    if (select.value === "All") {
      filteredData = data;
    } else {
      filteredData = data.filter((country) => country.region === select.value);
    }

    let sortedData = [...filteredData];
    if (selectPop.value === "HighToLow") {
      sortedData.sort((a, b) => b.population - a.population);
    } else if (selectPop.value === "LowToHigh") {
      sortedData.sort((a, b) => a.population - b.population);
    } else if (selectPop.value === "Biggest") {
      sortedData.sort((a, b) => b.area - a.area);
    } else if (selectPop.value === "Smallest") {
      sortedData.sort((a, b) => a.area - b.area);
    } else if (selectPop.value === "az") {
      sortedData.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (selectPop.value === "za") {
      sortedData.sort((a, b) => b.name.common.localeCompare(a.name.common));
    }

    allCountriesEl.innerHTML = "";
    displayCountries(sortedData);
  });
};

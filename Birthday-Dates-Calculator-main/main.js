// Get wanted elements
const sumbitBtn = document.getElementById("sumbit-btn"),
  yearInput = document.getElementById("year-input"),
  monthInput = document.getElementById("month-input"),
  dayInput = document.getElementById("day-input"),
  yearsNum = document.getElementById("years-num"),
  monthsNum = document.getElementById("months-num"),
  daysNum = document.getElementById("days-num"),
  yearErrorMsg = document.getElementById("year-error-msg"),
  monthErrorMsg = document.getElementById("month-error-msg"),
  dayErrorMsg = document.getElementById("day-error-msg");

sumbitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  calcAge();
});

const calcAge = () => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();

  const invalidYears = () => {
    if (yearInput.value > currentYear || yearInput.value < 1800) {
      return true;
    }
  };
  const invalidMonths = () => {
    if (
      monthInput.value <= 0 ||
      monthInput.value > 12 ||
      (yearInput.value == currentYear && monthInput.value > currentMonth)
    ) {
      return true;
    }
  };
  const invalidDates = () => {
    const checkFebruary =
      (monthInput.value == 2 &&
        yearInput.value % 4 != 0 &&
        dayInput.value > 28) ||
      (monthInput.value == 2 &&
        yearInput.value % 4 == 0 &&
        dayInput.value > 29);

    const onlyCurrentAndPastDates =
      yearInput.value == currentYear &&
      monthInput.value == currentMonth &&
      dayInput.value > currentDay;

    const checkFor31 =
      [2, 4, 6, 9, 11].includes(Number(monthInput.value)) &&
      dayInput.value > 30;

    const invalidDate = dayInput.value <= 0 || dayInput.value > 31;
    if (invalidDate || onlyCurrentAndPastDates || checkFebruary || checkFor31) {
      return true;
    }
  };

  fillFunction(invalidYears(), yearInput, yearErrorMsg);
  fillFunction(invalidMonths(), monthInput, monthErrorMsg);
  fillFunction(invalidDates(), dayInput, dayErrorMsg);

  let userBrithDate = new Date(
    yearInput.value,
    monthInput.value - 1,
    dayInput.value
  );

  let diffDays = Math.floor((currentDate - userBrithDate) / 1000 / 3600 / 24);
  let diffDay = Math.floor((diffDays % 365.25) % 30.1);
  let diffMonths = Math.floor((diffDays % 365.25) / 30.5);
  let diffYears = Math.floor(diffDays / 365.25);

  if (diffMonths < 0) {
    diffYears--;
    diffMonths += 12;
  }

  const chackContains = () => {
    if (
      yearErrorMsg.parentNode.classList.contains("invalid") ||
      monthErrorMsg.parentNode.classList.contains("invalid") ||
      dayErrorMsg.parentNode.classList.contains("invalid")
    ) {
      return false;
    } else {
      return true;
    }
  };

  console.log(chackContains());

  function showResult(element, diff) {
    if (chackContains()) {
      let i = 0;
      let timer = setInterval(() => {
        element.textContent = i;
        i++;
        if (i > diff) {
          clearInterval(timer);
        }
      }, 500 / diff);
    } else {
      element.textContent = "- -";
    }
  }

  showResult(yearsNum, diffYears);
  showResult(monthsNum, diffMonths);
  showResult(daysNum, diffDay);
};

function fillFunction(functionN, input, errorMsg) {
  if (functionN) {
    errorMsg.parentNode.classList.add("invalid");
    errorMsg.textContent = input.value
      ? "Must be a valid value"
      : "This field is required";
  } else {
    errorMsg.parentNode.classList.remove("invalid");
    errorMsg.textContent = input.value
      ? "Must be a valid value"
      : "This field is required";
  }
}

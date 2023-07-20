const counters = document.querySelectorAll(".counter");

counters.forEach((counterEl) => {
  counterEl.innerText = "0";

  const UptadeCounter = () => {
    const target = +counterEl.getAttribute("data-target");
    const counter = +counterEl.innerHTML;

    const increment = target / 100;

    if (counter < target) {
      counterEl.innerHTML = `${Math.ceil(counter + increment)}`;
      setTimeout(UptadeCounter, 1);
    } else {
      counterEl.innerText = target;
    }
  };

  UptadeCounter();
});

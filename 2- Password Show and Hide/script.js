const button = document.getElementById("btn");
const input = document.getElementById("input");

button.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    button.innerHTML = '<i class="fa-sharp fa-solid fa-eye-slash"></i>';
  } else {
    input.type = "password";
    button.innerHTML = '<i class="fa-solid fa-eye"></i>';
  }
});

// <i class="fa-sharp fa-solid fa-eye-slash"></i>

"use strict";

const addBtn = document.getElementById("add");

const taskListContainer = document.querySelector(".taskList");
const taskList = document.querySelector(".taskList ul");
const deleteBtns = document.querySelectorAll(".delete");
const addInput = document.getElementById("input");

let todos = [];

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const taskText = addInput.value.trim();
  if (!taskText) return;
  todos.push(taskText);
  addInput.value = "";
  uptadeTaskList();

  sessionStorage.setItem("todos", JSON.stringify(todos));

  addInput.focus();
});

const uptadeTaskList = () => {
  taskList.innerHTML = "";

  taskListContainer.style.display = todos.length ? "block" : "none";

  todos.forEach((todo) => {
    const html = `<li>
    <span>${todo}</span>
    <button class="btn delete">Delete Task</button>
  </li> `;
    taskList.innerHTML += html;
  });
  deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", () => {
      removeTodo(index);
    });
  });
};

const removeTodo = (index) => {
  todos.splice(index, 1);
  sessionStorage.setItem("todos", JSON.stringify(todos));
  uptadeTaskList();
};

const load = () => {
  const storedTodos = JSON.parse(sessionStorage.getItem("todos"));
  if (storedTodos) {
    todos = storedTodos;
  }

  uptadeTaskList();
};

load();
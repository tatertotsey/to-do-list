import { taskHandler } from "./taskhandler.js";
import { clearFormInput } from "./display.js";

function tabHandler() {
  const tabs = document.querySelectorAll("[data-tab-target]");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
      target.classList.add("active");
    });
  });
}

function addTaskHandler() {
  const addTaskBtn = document.getElementsByClassName("add-task-title")[0];
  const form = document.getElementsByClassName("add-task")[0];

  addTaskBtn.addEventListener("click", () => {
    form.classList.toggle("active");
  });
}

// function checkboxHandler() {
//   const cb = document.getElementById('cb');
//   cb.addEventListener("click", () => {
//     console.log(cb.checked)
//   })
// }

export function getCurrentDatetoHTML() {
  const dueDate = document.getElementById("due-date");
  dueDate.value = new Date().toISOString().slice(0, 10);
}

//get the form inputs
const getFormInput = (() => {
  const form = document.getElementsByClassName("task-form")[0];
  const inputBtn = document.querySelectorAll("input[type=button]");
  let priority = "!";
  let inputList = [];

  for (let btn of inputBtn) {
    btn.addEventListener("click", () => {
      priority = btn.value;
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    for (let input of e.target) {
      if (input.type != "button" && input.type != "submit") {
        inputList.push(input.value);
      }
      clearFormInput(input);
    }
    inputList.push(priority);
    taskHandler(inputList);
    inputList = [];
  });
})();

function eventHandler() {
  tabHandler();
  addTaskHandler();
  getCurrentDatetoHTML();
  // checkboxHandler();
}
export default eventHandler;

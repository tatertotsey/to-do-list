import { getCurrentDatetoHTML } from "./eventhandler.js";
export const displayTask = (array) => {
  const today = document.getElementsByClassName("today-content")[0];
  const upcoming = document.getElementsByClassName("upcoming-content")[0];
  const taskcontainer = document.createElement("div");
  taskcontainer.className = "new-task-container";
  const home = document.getElementsByClassName("home-content")[0];
  taskcontainer.innerHTML = `<input class='cb' type='checkbox' name='task-title' value='${array[0]}'>
                             <label for='task-title'>${array[0]}</label>
                             <div class='center' style=''><p>${array[1]}</p></div>
                             <div class='right-side'>
                             <p class='date'>${array[2]}</p>
                             <i class="fa-regular fa-pen-to-square"></i>
                             <i class="fa-regular fa-trash-can"></i></div>`;

  taskcontainer.style.border = "1px solid " + array[3].toString();

  if (array[2].toString() == getCurrentDatetoHTML()) {
    const taskClone = taskcontainer.cloneNode(true);
    today.appendChild(taskClone);
  }
  if (array[2].toString() > getCurrentDatetoHTML()) {
    const taskClone = taskcontainer.cloneNode(true);
    upcoming.appendChild(taskClone);
  }
  home.appendChild(taskcontainer);
};

export const clearFormInput = (input) => {
  if (
    input.type != "button" &&
    input.type != "submit" &&
    input.type != "date"
  ) {
    input.value = "";
  }
};

export const resetTasks = () => {
  const tasks = document.querySelectorAll(".new-task-container");
  for (let task of tasks) {
    task.remove();
  }
};

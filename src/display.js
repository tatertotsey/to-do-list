import { getCurrentDatetoHTML } from "./eventhandler.js";

export const showAllTasks = (array) => {
  const taskcontainer = document.createElement("div");
  taskcontainer.className = "new-task-container";
  const home = document.getElementsByClassName("home-content")[0];
  taskcontainer.innerHTML = `<input id='cb' type='checkbox' name='task-title' value='${array[0]}'>
                             <label for='task-title'>${array[0]}</label>
                             <div class='right-side'>
                             <p>${array[2]}</p>
                             <i class="fa-regular fa-pen-to-square"></i>
                             <i class="fa-regular fa-trash-can"></i></div>`;

  //   array.forEach((element) => {
  //     const item = document.createElement("p");
  //     item.classList.add("new-task");
  //     item.append(element);
  //     taskcontainer.append(item);
  //   });
  home.appendChild(taskcontainer);
};

export const clearFormInput = (input) => {
  if (input.type != "button" && input.type != "submit") {
    input.value = "";
  }
  getCurrentDatetoHTML();
};

//TODO date bugfix

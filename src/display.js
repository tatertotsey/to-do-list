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

export const addTaskforLists = (listItemContent) => {
  
 
    const addtaskbtn = document.createElement('div');
    addtaskbtn.className = 'add-task';
    addtaskbtn.innerHTML = `<div class="add-task-title">
      <i class="fa-solid fa-plus"></i>Add Task
      </div>      
      <div class="task-form">
      <form action="#">
        <label for="title">Title:</label>
        <input type="text" id="title" placeholder="Water plants!" />

        <label for="description">Description:</label>
        <input type="text" id="description" />

        <label for="due-date">Due Date:</label>
        <input type="date" id="due-date" value="" />

        <label for=">Priority:</label>
        <div class="buttons">
          <input
            type="button"
            name="1"
            id="1"
            value="!"
            style="background-color: rgba(0, 128, 0, 0.375)"
          />
          <input
            type="button"
            name="1"
            id="2"
            value="!!"
            style="background-color: rgba(247, 168, 8, 0.535)"
          />
          <input
            type="button"
            name="1"
            id="3"
            value="!!!"
            style="background-color: rgba(255, 0, 0, 0.595)"
          />
        </div>

        <button type="submit" id="submit">Add</button>
      </form>
    </div>`;

    listItemContent.appendChild(addtaskbtn);
 
};

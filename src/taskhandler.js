import { updateLocalStorage, getLocalStorage } from "./storage.js";

export const taskList = (() => {
  let taskList = [];
  const addNewTask = (task) => {
    taskList.push(task);
    updateLocalStorage(taskList);
    updateDisplay();
  };
  const updateDisplay = () => {
    getLocalStorage().forEach((array) => {
      const taskitem = document.createElement("p");
      const addtask = document.getElementsByClassName("add-task")[0];
      taskitem.innerText = array[0];
      addtask.appendChild(taskitem);
    });
  };
  return { addNewTask, taskList, updateDisplay };
})();

const Task = (title, description, dueDate, priority) => {
  title;
  description;
  dueDate;
  priority;

  const createTask = () => {
    taskList.addNewTask([title, description, dueDate, priority]);
  };
  return { createTask };
};

export function taskHandler(forminput) {
  Task(forminput[0], forminput[1], forminput[2], forminput[3]).createTask();
}

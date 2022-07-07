import { updateLocalStorage, getLocalStorage } from "./storage.js";
import { showAllTasks } from "./display.js";

export const taskList = (() => {
  let tasklist = [];
  const addNewTask = (task) => {
    tasklist.push(task);
    updateLocalStorage(tasklist);
    updateDisplay(task);
  };
  const displayAllfromStorage = () => {
    tasklist = getLocalStorage();
    if (tasklist == null) {
      tasklist = [];
    }
    tasklist.forEach((array) => {
      showAllTasks(array);
    });
  };
  const updateDisplay = (task) => {
    showAllTasks(task);
  };

  return { addNewTask, tasklist, displayAllfromStorage, updateDisplay };
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

import { updateLocalStorage, getLocalStorage } from "./storage.js";
import { resetTasks, displayTask } from "./display.js";

export const taskList = (() => {
  let tasklist = [];
  const addNewTask = (task) => {
    tasklist.push(task);
    sortByDate(tasklist);
    updateLocalStorage(tasklist);
    updateDisplay();
  };
  const displayAllfromStorage = () => {
    tasklist = getLocalStorage();

    if (tasklist == null) {
      tasklist = [];
    }
    tasklist.forEach((array) => {
      displayTask(array);
    });
  };
  const updateDisplay = () => {
    resetTasks();
    displayAllfromStorage();
  };

  const sortByDate = (tasklist) => {
    tasklist = tasklist.sort(function (a, b) {
      return Date.parse(a[2]) - Date.parse(b[2]);
    });
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

export function updateLocalStorage(taskList) {
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("taskList"));
}

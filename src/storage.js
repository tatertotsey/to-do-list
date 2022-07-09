export function updateLocalStorage(tasklist) {
  localStorage.setItem("taskList", JSON.stringify(tasklist));
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("taskList"));
}

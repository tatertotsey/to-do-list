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

function eventHandler() {
  tabHandler();
  addTaskHandler();
}
export default eventHandler;

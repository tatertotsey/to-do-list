import { taskHandler } from "./taskhandler.js";
import { clearFormInput, addTaskforLists } from "./display.js";


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

function checkboxHandler() {
  const checkboxAll = document.getElementsByClassName("cb");
  const home = document.getElementsByClassName("home-content")[0];

  for (let cb of checkboxAll) {
    cb.addEventListener("click", () => {
      if (cb.checked) {
        home.appendChild(cb.parentNode);
      }
    });
  }
}

export function getCurrentDatetoHTML() {
  const dueDate = document.getElementById("due-date");
  dueDate.value = new Date().toISOString().slice(0, 10);
  return dueDate.value;
}
const addNewList = () => {
  const newListBtn = document.getElementsByClassName("last-nav")[0];
  const listWrapper = document.getElementById('list-wrapper')
  let id = 0;
  newListBtn.addEventListener("click", () => {
    let cloned = document.createElement('div');
    cloned.classList = "item list-item";
    cloned.setAttribute('data-tab-target', '#list-item-' + id )
    cloned.innerHTML = `<i class="fa-solid fa-list-check"></i>
                        <p class="list-text">DoubleClickMe</p></div>`
    listWrapper.appendChild(cloned);
    changeListName();
    createListContent();
    tabHandler();
    id++;
  });
};

const changeListName = () => {
  const itemName = document.querySelectorAll(".list-text");
  itemName.forEach((itemname) => {
    itemname.ondblclick = () => {
      itemname.contentEditable = true;
      setTimeout(() => {
        if (document.activeElement !== itemname) {
          itemname.onblur = () => {
            itemname.contentEditable = false;
          };
        }
      }, 300);
    };
  });
};
let id = 0;
const createListContent = () => {
  const body = document.querySelector('body');
  const itemName = document.querySelectorAll(".list-text")[0].innerText;
  const listItemContent = document.createElement("div");
  listItemContent.id = 'list-item-' + id;
  listItemContent.setAttribute('data-tab-content', '');
  listItemContent.innerHTML = `<div class="list-item-content">
                              <h1>${itemName}</h1>
                              </div>
                              </div>`;

  addTaskforLists(listItemContent);

  body.appendChild(listItemContent);
  id++;
};

const loadListContent = () => {
  const body = document.querySelector('body');
  const itemName = document.querySelectorAll(".list-text")[0].innerText;
  const listItem = document.querySelectorAll(".list-item");
  
  listItem.forEach(item => {
    console.log('hi')
    const listItemContent = document.createElement("div");
    listItemContent.id = 'list-item-' + id;
    listItemContent.setAttribute('data-tab-content', '');
    listItemContent.innerHTML = `<div class="list-item-content">
                                <h1>${itemName}</h1>
                                </div>
                                </div>`
    body.appendChild(listItemContent);
    id++;
  })
}


//get the form inputs
const getFormInput = (() => {
  const form = document.getElementsByClassName("task-form")[0];
  const inputBtn = document.querySelectorAll("input[type=button]");
  let priority = "!";
  let inputList = [];

  for (let btn of inputBtn) {
    btn.addEventListener("click", () => {
      priority = btn.style.backgroundColor;
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
    getCurrentDatetoHTML();
    inputList = [];
  });
})();

function eventHandler() {
  tabHandler();
  addTaskHandler();
  getCurrentDatetoHTML();
  checkboxHandler();
  addNewList();
  loadListContent();
}
export default eventHandler;

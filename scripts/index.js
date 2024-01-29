const input = document.querySelector('.input');
const add = document.querySelector('.add');

const list = document.querySelector('.list');

function loadListFromMemory() {
  let tasks = localStorage.getItem('tasks');
  tasks = JSON.parse(tasks);

  for (let task of tasks) {
    addTaskToList(task);
  }
}

function saveListToMemory() {
  const listItems = document.querySelectorAll('li');
  const todoList  = [];

  for (let task of listItems) {
    let text = task.innerText;
    text = text.replace('X', '').trim();
    todoList.push(text);
  }

  const json = JSON.stringify(todoList);
  localStorage.setItem('tasks', json);
}

function createDeleteButton(element) {
  const btn = document.createElement('button');
  btn.classList.add('remove');
  btn.innerHTML = 'X';
  element.appendChild(btn);
}

function clearInput() {
  input.value = '';
  input.focus();
}

function createListItem() {
  const li = document.createElement('li');
  li.classList.add('list-item');
  return li;
}

function addTaskToList(task) {
  const element = createListItem();
  element.innerHTML = task;

  list.appendChild(element);
  createDeleteButton(element);

  clearInput();
  saveListToMemory();
}

add.addEventListener('click', (event) => {
  if (!input.value) return;

  addTaskToList(input.value);
});

input.addEventListener('keypress', (event) => {
  if (event.keyCode !== 13) return;

  addTaskToList(input.value);
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    event.target.parentElement.remove();
    saveListToMemory();
  }
});

loadListFromMemory();
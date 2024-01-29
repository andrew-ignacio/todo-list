const input = document.querySelector('.input');
const add = document.querySelector('.add');

const list = document.querySelector('.list');

function createListItem() {
  const li = document.createElement('li');
  li.classList.add('list-item');
  return li;
}

function addTaskToList(task) {
  const element = createListItem();
  element.innerHTML = task;

  list.appendChild(element);

  input.value = '';
}

add.addEventListener('click', (event) => {
  if (!input.value) return;

  addTaskToList(input.value);
});

input.addEventListener('keypress', (event) => {
  if (event.keyCode !== 13) return;
  
  addTaskToList(input.value);
});

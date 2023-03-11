import './styles.css';
import TaskList from './modules/list.js';

const tasklist = new TaskList();

window.onload = () => {
  tasklist.displaylist();
};

const form = document.getElementById('form-input');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = event.target.querySelector('input');
  const description = input.value.trim();

  if (description) {
    tasklist.addTask(description);
    input.value = '';
  }
});

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
  tasklist.removeTasks();
});

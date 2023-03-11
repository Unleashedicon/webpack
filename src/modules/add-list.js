import displaylist from './display.js';
import save from './save.js';

const tasks = [];
const addTask = (description) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  save(tasks);
  displaylist(tasks);
};

export default addTask;

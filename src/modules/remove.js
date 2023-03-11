import displaylist from './display.js';
import save from './save.js';

const removeTasks = (tasks) => {
  const taskList = document.getElementById('list');
  const completedTasks = taskList.querySelectorAll('.completed');
  const uncompletedTasks = [...taskList.querySelectorAll('li')].filter((task) => !task.classList.contains('completed'));

  completedTasks.forEach((task) => {
    const { index } = task.dataset;
    tasks.splice(index, 1);
    task.remove();
  });

  uncompletedTasks.forEach((task, index) => {
    task.dataset.index = index;
    tasks[index] = { description: task.querySelector('label').textContent, completed: false };
  });

  save(tasks);
  displaylist(tasks);
};

export default removeTasks;

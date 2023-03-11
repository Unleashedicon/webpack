import save from './save.js';

export const editTaskDescription = (event, tasks, ellipsisContainer, trashContainer) => {
  const taskDescription = event.target.closest('li');
  const label = taskDescription.querySelector('label');

  label.removeAttribute('readonly');
  label.contentEditable = true;
  label.classList.add('text-edit');
  label.focus();

  const saveLabel = () => {
    label.contentEditable = false;
    const taskItems = Array.from(document.querySelectorAll('#list li'));
    const taskId = taskItems.indexOf(taskDescription);
    if (tasks[taskId]) {
      tasks[taskId].description = label.textContent.trim();
      save(tasks);
    }
    ellipsisContainer.classList.remove('invisible');
    trashContainer.classList.add('invisible');
    event.target.closest('li').classList.remove('highlighted');
  };

  label.addEventListener('blur', saveLabel);
  label.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      saveLabel();
    }
  });
};

export const deleteTask = (event, tasks) => {
  const task = event.target.closest('li');
  const taskList = document.getElementById('list');
  const taskItems = Array.from(taskList.getElementsByTagName('li'));
  const taskId = taskItems.indexOf(task);

  tasks.splice(taskId, 1);
  for (let i = taskId; i < taskItems.length; i += 1) {
    taskItems[i].id = `task-${i}`;
    taskItems[i].querySelector('input[type="checkbox"]').id = `task-${i}-checkbox`;
    taskItems[i].querySelector('label').htmlFor = `task-${i}-checkbox`;
  }

  task.remove();
  save(tasks);
};

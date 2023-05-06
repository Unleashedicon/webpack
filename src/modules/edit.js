import save from './save.js';

export const editTaskDescription = (event, tasks) => {
  const taskDescription = event.target.closest('li');
  const label = taskDescription.querySelector('label');

  label.removeAttribute('readonly');
  label.contentEditable = true;
  label.classList.add('text-edit');
  label.focus();

  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(label);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);

  const originalLabel = label.textContent.trim();
  const saveLabel = () => {
    label.contentEditable = false;
    const taskItems = Array.from(document.querySelectorAll('#list li'));
    const taskId = taskItems.indexOf(taskDescription);
    const newLabel = label.textContent.trim();
    if (newLabel !== originalLabel && tasks[taskId]) {
      tasks[taskId].description = newLabel;
      save(tasks);
    }
  };

  label.addEventListener('blur', saveLabel);
  label.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
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
  task.remove();

  // Update indexes of the remaining tasks
  for (let i = taskId; i < taskItems.length; i += 1) {
    const currentTask = taskItems[i];
    const newTaskId = i;

    currentTask.querySelector('input[type="checkbox"]').id = `task-${newTaskId}`;
    currentTask.querySelector('label').htmlFor = `task-${newTaskId}`;
  }

  save(tasks);
};



import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { editTaskDescription } from './edit.js';
import save from './save.js';

library.add(faTrashAlt, faEllipsisV);

const displaylist = (tasks, deleteTask) => {
  const tasklist = document.getElementById('list');
  tasklist.innerHTML = '';

  if (tasks) {
    for (let i = 0; i < tasks.length; i += 1) {
      const task = tasks[i];
      const tasklistitem = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.id = `task-${i}`;

      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          tasklistitem.classList.add('completed');
        } else {
          tasklistitem.classList.remove('completed');
        }
        tasks[i].completed = checkbox.checked;
        save(tasks);
      });

      const label = document.createElement('label');
      label.htmlFor = `task-${i}`;
      label.textContent = task.description;
      label.setAttribute('readonly', true);

      label.addEventListener('click', (e) => {
        e.preventDefault();
      });

      const trashIcon = icon({ prefix: 'fas', iconName: 'trash-alt' });
      const trashContainer = document.createElement('span');
      trashContainer.classList.add('icon', 'icon-trash', 'hidden');
      trashContainer.innerHTML = trashIcon.html;
      trashContainer.addEventListener('click', () => {
        deleteTask(i);
        save(tasks);
      });

      const ellipsisIcon = icon({ prefix: 'fas', iconName: 'ellipsis-v' });
      const ellipsisContainer = document.createElement('span');
      ellipsisContainer.classList.add('icon', 'icon-ellipsis');
      ellipsisContainer.innerHTML = ellipsisIcon.html;

      const handleClickOutside = (event) => {
        const isTrashIcon = event.target === trashContainer
          || trashContainer.contains(event.target);

        const isEllipsisIcon = event.target === ellipsisContainer
          || ellipsisContainer.contains(event.target);

        const listItem = event.target.closest('li');
        if (listItem) {
          if (!isTrashIcon && !isEllipsisIcon) {
            ellipsisContainer.classList.remove('hidden');
            trashContainer.classList.add('hidden');
            if (listItem.classList.contains('highlighted')) {
              listItem.classList.remove('highlighted');
            }
          } else if (isEllipsisIcon) {
            ellipsisContainer.classList.add('hidden');
            trashContainer.classList.remove('hidden');
            listItem.classList.add('highlighted');
          }
        }
      };

      ellipsisContainer.addEventListener('click', (event) => {
        ellipsisContainer.classList.add('hidden');
        trashContainer.classList.remove('hidden');
        event.target.closest('li').classList.add('highlighted');
        editTaskDescription(event, tasks);
        document.addEventListener('click', handleClickOutside);
      });

      document.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) { // Enter key
          handleClickOutside(event);
        }
      });

      tasklistitem.appendChild(checkbox);
      tasklistitem.appendChild(label);
      tasklistitem.appendChild(trashContainer);
      tasklistitem.appendChild(ellipsisContainer);
      tasklist.appendChild(tasklistitem);
    }
  }
};

export default displaylist;

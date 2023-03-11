import load from './load.js';
import displaylist from './display.js';
import save from './save.js';
import removeTasks from './remove.js';

class TaskList {
  constructor() {
    this.tasks = load();
  }

  save() {
    save(this.tasks);
  }

  addTask(description) {
    // Add the pre-coded tasks if they don't exist
    if (this.tasks.length === 0) {
      this.tasks = [
        {
          description: 'Task 1',
          completed: false,
          index: 0,
        },
        {
          description: 'Task 2',
          completed: false,
          index: 1,
        },
        {
          description: 'Task 3',
          completed: false,
          index: 2,
        },
      ];
    }

    const newTask = {
      description,
      completed: false,
      index: this.tasks.length,
    };
    this.tasks.push(newTask);
    this.save();
    this.displaylist();
  }

  removeTasks() {
    removeTasks(this.tasks);
    this.displaylist();
    this.save();
  }

  displaylist() {
    displaylist(this.tasks);
  }
}

export default TaskList;
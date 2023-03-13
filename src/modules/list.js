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
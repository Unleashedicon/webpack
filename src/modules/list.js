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

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.updateIndexes();
    this.save();
    this.displaylist();
  }

  updateIndexes() {
    for (let i = 0; i < this.tasks.length; i += 1) {
      this.tasks[i].index = i;
    }
  }

  removeTasks() {
    removeTasks(this.tasks);
    this.displaylist();
    this.save();
  }

  displaylist() {
    displaylist(this.tasks, this.deleteTask.bind(this));
  }
}

export default TaskList;

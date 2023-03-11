const save = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default save;

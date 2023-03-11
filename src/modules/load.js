const load = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  return tasks || [];
};

export default load;
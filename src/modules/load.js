const tasks = [];

const load = () => JSON.parse(localStorage.getItem('tasks')) || tasks;

export default load;

const tasks = [
  {
    description: 'Task 1',
    completed: false,
    index: 0,
  },
  {
    description: 'Task 2',
    completed: true,
    index: 1,
  },
  {
    description: 'Task 3',
    completed: false,
    index: 2,
  },
];
const load = () => JSON.parse(localStorage.getItem('tasks')) || tasks;
export default load;
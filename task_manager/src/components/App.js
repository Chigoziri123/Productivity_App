import { useEffect, useState } from 'react';
import '../styles/App.module.css';
import StatusLine from '../components/StatusLine'
// import Task from '../components/Task'

function App() {
  const [tasks, setTasks] = useState([]); // Initialize with an empty array

  useEffect(() => {
    loadTasksFromLocalStorage();
  }, []);

  function addEmptyTask(status) {
    const lastTask = tasks[tasks.length - 1];
    let newTaskId = 1;

    if (lastTask !== undefined) {
      newTaskId = lastTask.id + 1; // Use the last task's ID
    }

    const newTask = {
      id: newTaskId,
      title: '',
      description: '',
      urgency: '',
      status: status,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    saveTasksToLocalStorage([...tasks, newTask]);
  }

  function addTask(taskToAdd) {
    const filteredTasks = tasks.filter((task) => task.id !== taskToAdd.id);
    const newTaskList = [...filteredTasks, taskToAdd];

    setTasks(newTaskList);
    saveTasksToLocalStorage(newTaskList);
  }

  function deleteTask(taskId) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(filteredTasks);
    saveTasksToLocalStorage(filteredTasks);
  }

  function moveTask(id, newStatus) {
    const task = tasks.find((task) => task.id === id);
    const filteredTasks = tasks.filter((task) => task.id !== id);

    task.status = newStatus;

    const newTaskList = [...filteredTasks, task];

    setTasks(newTaskList);

    saveTasksToLocalStorage(newTaskList);
  }

  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function loadTasksFromLocalStorage() {
    const loadedTasks = localStorage.getItem('tasks');
    const tasks = JSON.parse(loadedTasks);

    if (tasks) {
      setTasks(tasks);
    }
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <main>
        <section>
          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Backlog"
          />

          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="In Progress"
          />

          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Done"
          />
        </section>
      </main>
    </div>
  );
}

export default App;

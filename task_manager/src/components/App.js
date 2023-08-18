import { useEffect, useState } from 'react';
import '../styles/App.module.css';
import StatusLine from './StatusLine';


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("using effect")
  }, []);

  function addEmptyTask(status) {
    //
  }

  function addTask(taskToAdd) {
    //
  }

  function deleteTask(TaskId) {
    //
  }

  function moveTask(id, newStatus) {
    //
  }

  function saveTasKsToLocalStorage(Tasks) {
    //
  }

  function loadTasksFromLocalStorage() {
    //
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <main>
        <section>
          <StatusLine 
          task={tasks}
          addEmptyTask={addEmptyTask}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          status="Backlog"
          />
          
          <StatusLine
          task={tasks}
          addEmptyTask={addEmptyTask}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          status="In Progress" />
          
          <StatusLine
          task={tasks}
          addEmptyTask={addEmptyTask}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          status="Done" />
        </section>
      </main>
    </div>
  );
}

export default App;

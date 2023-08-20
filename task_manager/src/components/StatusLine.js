import React from 'react'; // Import React
import '../styles/StatusLine.module.css';
import Task from './Task';

export default function StatusLine(props) {
  const { status, tasks, addTask, deleteTask, addEmptyTask, moveTask } = props;

  let taskList = null;
  let tasksForStatus = null;

  function handleAddEmpty() {
    addEmptyTask(status);
  }

  if (tasks) {
    tasksForStatus = tasks.filter((task) => task.status === status);
  }

  if (tasksForStatus) {
    taskList = tasksForStatus.map((task) => (
      <Task
        addTask={addTask}
        deleteTask={deleteTask}
        moveTask={moveTask}
        key={task.id}
        task={task}
      />
    ));
  }

  return (
    <div className="statusLine">
      <h3>{status}</h3>
      {taskList}
      <button onClick={handleAddEmpty} className="button addTask">
        +
      </button>
    </div>
  );
}

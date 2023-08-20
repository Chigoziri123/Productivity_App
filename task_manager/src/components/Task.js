import '../styles/Task.module.css';
import { useState } from "react";

export default function Task(props) {
  const { addTask, deleteTask, moveTask, task } = props;
  const [urgencyLevel, setUrgencyLevel] = useState(task.urgencyLevel);
  const [collapsed, setCollapsed] = useState(task.isCollapsed);
  const [formAction, setFormAction] = useState("");

  function setUrgency(event) {
    setUrgencyLevel(event.target.getAttribute("urgency")); // Use getAttribute to get the urgency value
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formAction === "save") {
      if (collapsed) {
        setCollapsed(false);
      } else {
        let newTask = {
          id: task.id,
          title: event.target.elements.title.value,
          description: event.target.elements.description.value,
          urgencyLevel: urgencyLevel,
          status: task.status,
          isCollapsed: true, // when a new task is created, we want to collapse it.
        };

        addTask(newTask);
        setCollapsed(true);
      }
    }

    if (formAction === "delete") {
      deleteTask(task.id);
    }
  }

  function handleMoveLeft() {
    let newStatus = "";

    if (task.status === "In Progress") {
      newStatus = "Backlog";
    } else if (task.status === "Done") {
      newStatus = "In Progress";
    }
    if (newStatus !== "") {
      moveTask(task.id, newStatus);
    }
  }

  function handleMoveRight() {
    let newStatus = "";

    if (task.status === "Backlog") {
      newStatus = "In Progress";
    } else if (task.status === "In Progress") {
      newStatus = "Done";
    }
    if (newStatus !== "") {
      moveTask(task.id, newStatus);
    }
  }
  return (
    <div className={`task ${collapsed ? "collapsedTask" : ""}`}>
      <button onClick={handleMoveLeft} className="button moveTask">&#171;</button>
      <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
        <input
          type="text"
          className="title input"
          name="title"
          placeholder="Enter Title"
          disabled={collapsed}
          defaultValue={task.title}
        />
        <textarea
          rows="2"
          className="description input"
          name="description"
          placeholder="Enter Description"
          defaultValue={task.description}
        />
        <div className="urgencyLabels">
          <label className={`low ${urgencyLevel === "low" ? "selected" : ""}`}>
            <input
              urgency="low"
              onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            low
          </label>

          <label className={`medium ${urgencyLevel === "medium" ? "selected" : ""}`}>
            <input
              urgency="medium"
              onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            medium
          </label>

          <label className={`high ${urgencyLevel === "high" ? "selected" : ""}`}>
            <input
              urgency="high"
              onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            high
          </label>
        </div>

        {/* Save Button */}
        <button onClick={() => { setFormAction("save"); }}
          className='button'>{collapsed ? "Edit" : "Save"}
        </button>

        {/* Delete Button */}
        {collapsed && <button onClick={() => { setFormAction("delete"); }}
          className='button delete'>X
        </button>}

      </form>
      <button onClick={handleMoveRight} className="button moveTask">&#187;</button>
    </div>
  )
}

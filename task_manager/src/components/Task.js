import '../styles/Task.module.css';
import {useState} from "react"

export default function Task(props) {

  const {addTask, deleteTask, moveTask, task} = props;

  const [urgencyLevel, setUrgencyLevel] = useState(task.urgency);
  const [collapsed, setCollapsed] = useState(task.isCollapsed);
  const [formAction, setFormedAction] = useState("");

  function setUrgency(event) {
    setUrgencyLevel(event.target.attributes.urgency.value)
  }

  function handleSubmit(event) {
    ///
  }

  function handleMoveLeft() {

  }

  function handleMoveRight(){


  }
  return (
    <div className={`task $(collapsed ? "collapsedTask" : "")`}>
      <button onclick={handleMoveLeft} className="button moveTask">&#171;</button>
      <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
        <input
          type="text"
          className="title input"
          placeholder="Enter Title"
          disabled={collapsed}
          defaultTitle={task.title}
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
          </label>

          <label className={`medium ${urgencyLevel === "medium" ? "selected" : ""}`}>
            <input 
              urgency="medium"
              onChange={setUrgency}
              type="radio"
              name="urgency"
            />
          </label>

          <label className={`high ${urgencyLevel === "high" ? "selected" : ""}`}>
            <input 
              urgency="high"
              onChange={setUrgency}
              type="radio"
              name="urgency"
            />
          </label>
        </div>
        {/* Save Button */}
        <button onClick={() => {setFormAction("save");}} 
        className='buttton'>{collapsed ? "Edit" : "Save"}
        </button>

        {/* Delete Button */}
        { collapsed && <button onClick={() => {setFormAction("delete")}} 
        className='buttton delete'>X
        </button>}

      </form> 
      <button onclick={handleMoveRight} className="button moveTask">&#187;</button>
    </div>  
  )
}

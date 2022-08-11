import { Fragment } from "react";

const AddTaskForm = ({newTask,setNewTask,addTask})=>{
    return(
        <Fragment>
        {/* Add task */}
        <div  className="row">
          <div className="col">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button onClick={addTask} className="btn btn-lg btn_add">
              Add Task
            </button>
          </div>
        </div>
        <br />
      </Fragment>
    )
}
export default AddTaskForm;
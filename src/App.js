import React, {  useEffect, useState } from "react";
import AddTaskForm from "./Components/AddTaskForm";
import TODO from "./Components/ToDo";
import UpdateTaskForm from "./Components/UpdateTaskForm";
import data from "./Components/dp.json";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
 
  const [toDo, setToDo] = useState(data);
  

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // ============Add task==========
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };
  // =============Delete task==========
  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setToDo(newTask);
  };
  // ==============Mark ==> done or complete============
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };
  // =============Cancel Update==============
  const cancelUpdate = () => {
    setUpdateData("");
  };
  // ============Change Task Update===========
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };
  // ========Update Task
  const updateTask = () => {
    let filterText = [...toDo].filter((task) => task.id !== updateData.id);
    let UpdateObject = [...filterText, updateData];
    setToDo(UpdateObject);
    setUpdateData("");
  };
  return (
    <div  className="container App">
      <br></br>
      <h2>To Do List App (ReactJs)</h2>
      <br></br>

      {/* Update , Cancel */}
      {updateData && updateData ? (
        <UpdateTaskForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {toDo && toDo.length ? "" : "No Tasks..."}

      <TODO 
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;

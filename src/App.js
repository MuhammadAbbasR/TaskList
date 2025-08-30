import React, { useState } from "react";
import TaskList from "./compenents/TaskList";
import AddTaskForm from "./compenents/AddTaskForm";
import "./App.css"; 

function App() {
  const [tasks, setTasks] = useState([
    
  ]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  
  return (
    <div className="app-container">
      <h1>Task Tracker ✅</h1>
      <AddTaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;


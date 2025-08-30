import React, { useState } from "react";
import Button from "./button";

const AddTaskForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText(""); // reset input
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="add-task-input"
      />
      <Button text="Add Task" color="green" />
    </form>
  );
};

export default AddTaskForm;

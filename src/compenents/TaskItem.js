import React from "react";

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="task-item task-blue">
      <span>{task.text}</span>
      
      <button className="button red" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;

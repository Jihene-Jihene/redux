// src/components/Task.js
import React from "react";
import { useDispatch } from "react-redux";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
      />
      <span>{task.description}</span>
      <button
        onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;

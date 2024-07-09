import React from "react";
import "../style.css";

const TodoList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className={`priority ${task.priority}`}></span>
              <h3>{task.task}</h3>
              <p>{task.details}</p>
              <p>Deadline: {task.deadline}</p>
              <button onClick={() => onDeleteTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

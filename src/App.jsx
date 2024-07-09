import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex">
      <div className="add-task-container">
        <AddTask onAddTask={handleAddTask} />
      </div>
      <div className="todo-list-container">
        <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
};

export default App;

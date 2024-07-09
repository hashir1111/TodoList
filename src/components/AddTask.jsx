import React, { useState } from "react";
import "../style.css";

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("low");
  const [taskError, setTaskError] = useState("");
  const [detailsError, setDetailsError] = useState("");
  const [deadlineError, setDeadlineError] = useState("");

  const handleTaskChange = (event) => {
    setTask(event.target.value);
    if (event.target.value.length < 3) {
      setTaskError("Minimum 3 characters required");
    } else {
      setTaskError("");
    }
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value.substring(0, 400));
    if (event.target.value.length > 400) {
      setDetailsError("Maximum 400 characters allowed");
    } else {
      setDetailsError("");
    }
  };

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
    if (event.target.value < "1999-12-31") {
      setDeadlineError("Deadline must be on or after December 31, 1999");
    } else {
      setDeadlineError("");
    }
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.length >= 3 && deadline >= "1999-12-31" && details.length <= 400) {
      onAddTask({ task, details, deadline, priority });
      setTask("");
      setDetails("");
      setDeadline("");
      setPriority("low");
    } else {
      if (task.length < 3) {
        setTaskError("Minimum 3 characters required");
      }
      if (details.length > 400) {
        setDetailsError("Maximum 400 characters allowed");
      }
      if (deadline < "1999-12-31") {
        setDeadlineError("Deadline must be on or after December 31, 1999");
      }
    }
  };

  return (
    <div className="add-task">
      <h2>Add Your Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task">Task:</label>
          <input
            type="text"
            id="task"
            value={task}
            onChange={handleTaskChange}
            required
            minLength="3"
          />
          {taskError && <div style={{ color: "red" }}>{taskError}</div>}
        </div>
        <div>
          <label htmlFor="details">Details:</label>
          <input
            type="text"
            id="details"
            value={details}
            onChange={handleDetailsChange}
            maxLength="400"
          />
          {detailsError && <div style={{ color: "red" }}>{detailsError}</div>}
        </div>
        <div>
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={handleDeadlineChange}
            required
            min="1999-12-31"
          />
          {deadlineError && <div style={{ color: "red" }}>{deadlineError}</div>}
        </div>
        <div>
          <label htmlFor="priority">Priority:</label>
          <select
            style={{ marginTop: "5px" }}
            id="priority"
            value={priority}
            onChange={handlePriorityChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button style={{ marginTop: "20px" }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTask;

import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const editTask = (index, newText) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, text: newText } : t
    );
    setTasks(updatedTasks);
  };

  const containerStyle = {
    textAlign: "center",
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    padding: "8px",
    marginRight: "5px",
    width: "70%",
  };

  const buttonStyle = {
    padding: "8px",
    margin: "5px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#28a745",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
        style={inputStyle}
      />
      <button onClick={addTask} style={buttonStyle}>
        Add Task
      </button>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            index={index}
            task={task}
            removeTask={removeTask}
            toggleTaskStatus={toggleTaskStatus}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

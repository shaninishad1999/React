import React, { useState } from "react";

const TodoItem = ({ task, index, removeTask, toggleTaskStatus, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) editTask(index, newText);
    setIsEditing(!isEditing);
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    margin: "5px 0",
    background: "#f4f4f4",
    borderRadius: "4px",
  };

  const completedStyle = {
    textDecoration: "line-through",
    color: "gray",
  };

  const buttonStyle = {
    marginLeft: "5px",
    padding: "5px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
  };

  return (
    <li style={itemStyle}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          style={{ padding: "5px" }}
        />
      ) : (
        <span style={task.completed ? completedStyle : {}}>{task.text}</span>
      )}
      
      <div>
        <button
          onClick={handleEdit}
          style={{ ...buttonStyle, backgroundColor: "#007bff", color: "white" }}
        >
          {isEditing ? "✔️" : "✏️"}
        </button>
        <button
          onClick={() => toggleTaskStatus(index)}
          style={{
            ...buttonStyle,
            backgroundColor: task.completed ? "#ffc107" : "#28a745",
            color: "white",
          }}
        >
          {task.completed ? "🔄" : "✅"}
        </button>
        <button
          onClick={() => removeTask(index)}
          style={{ ...buttonStyle, backgroundColor: "#dc3545", color: "white" }}
        >
          ❌
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

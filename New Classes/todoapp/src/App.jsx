import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, taskcomplete, taskIncomplete, editDataSave } from "./todoSlice";

const App = () => {
  const [myval, setMyval] = useState("");
  const [btnStatus, setBtnStatus] = useState(true);
  const [workId, setWorkId] = useState(null);
  const mytask = useSelector((state) => state.mytodo.task);
  const dispatch = useDispatch();

  const editmyData = (id, work) => {
    setMyval(work);
    setBtnStatus(false);
    setWorkId(id);
  };

  const editmyDataDispatch = () => {
    dispatch(editDataSave({ id: workId, work: myval }));
    setMyval("");
    setBtnStatus(true);
    setWorkId(null);
  };

  return (
    <>
      <h1>Welcome to my Todo app</h1>
      Enter Task:{" "}
      <input
        type="text"
        value={myval}
        onChange={(e) => setMyval(e.target.value)}
      />
      {btnStatus ? (
        <button
          onClick={() => {
            dispatch(addTask({ id: Date.now(), work: myval, status: "incomplete" }));
            setMyval(""); // Clear input after adding task
          }}
        >
          Add Task
        </button>
      ) : (
        <button onClick={editmyDataDispatch}>Save Edit</button>
      )}
      <hr />
      <table border="1" width="600">
        <thead>
          <tr>
            <th>#</th>
            <th>Your Task List</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mytask.map((key, index) => (
            <tr key={key.id}>
              <td>{index + 1}</td>
              <td>
                {key.status === "complete" ? (
                  <span style={{ color: "red", textDecoration: "line-through" }}>
                    {key.work}
                  </span>
                ) : (
                  key.work
                )}
              </td>
              <td>
                <button onClick={() => dispatch(deleteTask({ id: key.id }))}>
                  Delete
                </button>
                <button onClick={() => dispatch(taskcomplete({ id: key.id }))}>
                  Complete
                </button>
                <button onClick={() => dispatch(taskIncomplete({ id: key.id }))}>
                  Incomplete
                </button>
                <button onClick={() => editmyData(key.id, key.work)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;

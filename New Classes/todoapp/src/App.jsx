import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, taskcomplete, taskIncomplete } from "./todoSlice";

const App = () => {
  const [myval, setMyval] = useState("");
  const [btnStatus,setBtnStatus]=useState(true)
  const [workId, setWorkId]=useState("")
  const mytask = useSelector((state) => state.mytodo.task);
  const dispatch = useDispatch();
  console.log(mytask);
const editmyData=(id,work)=>{
  setMyval(work)
  setBtnStatus(false)
  setWorkId(true)
}
  let sno = 0;
  const ans = mytask.map((key) => {
    sno++;
    return (
      <tr key={key.id}>
        <td>{sno}</td>
        <td>
          {key.status === "complete" ? (
            <>
              <span style={{ color: "red", textDecoration: "line-through" }}>
                {key.work}
              </span>
            </>
          ) : (
            <>{key.work}</>
          )}
        </td>
        <td>
          <button
            onClick={() => {
              dispatch(deleteTask({ id: key.id }));
            }}
          >
            delete
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              dispatch(taskcomplete({ id: key.id }));
            }}
          >
            {" "}
            Complete
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              dispatch(taskIncomplete({ id: key.id }));
            }}
          >
            {" "}
            In Complete
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              dispatch(editmyData({ id: key.id }));
            }}
          >
            {" "}
            edit Data
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1>Welcome to my Todo app</h1>
      Enter Task :{" "}
      <input
        type="text"
        value={myval}
        onChange={(e) => {
          setMyval(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTask({ id: Date.now(), work: myval, status: "Incomplete" }));
        }}
      >
        Add Task
      </button>
      <hr />
      <table border="1" width="600">
        <thead>
          <tr>
            <th>#</th>
            <th>Your Task List</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </>
  );
};

export default App;

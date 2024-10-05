import { useEffect, useState } from "react";

const ReactCounter = () => {
  const [cnt, setCnt] = useState(0);
  const [multi, setMulti] = useState(0);

  useEffect(() => {
    setMulti(cnt * 2);
  }, [cnt]);

  return (
    <>
      <h1>My Count : {cnt} </h1>
      <h1>Multiplication : {multi} </h1>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        Click Here
      </button>
    </>
  );
};

export default ReactCounter;

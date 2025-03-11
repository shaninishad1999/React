import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeColor } from './colorSlice';

const App = () => {
  const myclr = useSelector(state => state.mycolor.color);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Welcome to the color program</h1>

      <button onClick={() => dispatch(changeColor())}>Change color</button>

      <div style={{ height: "300px", width: "300px", background: myclr }}>
      </div>
    </div>
  );
};

export default App;

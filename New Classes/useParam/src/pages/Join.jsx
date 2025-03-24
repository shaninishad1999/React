import React from 'react';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();
  const myjoin = () => {
    navigate(`/myjoining/1234`);
  };

  return (
    <div>
      Join
      <button onClick={myjoin}>Join id</button>
    </div>
  );
}

export default Join;

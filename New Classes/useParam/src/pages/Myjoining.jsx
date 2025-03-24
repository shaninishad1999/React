import React from 'react';
import { useParams } from 'react-router-dom';

const Myjoining = () => {
  const { id } = useParams();

  return (
    <div>
      Myjoining id : {id}
    </div>
  );
}

export default Myjoining;

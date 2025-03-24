import React from 'react';
import { useParams } from 'react-router-dom';

const MyCompany = () => {
  const { myname } = useParams();

  return (
    <div>
      MyCompany : {myname}
    </div>
  );
}

export default MyCompany;

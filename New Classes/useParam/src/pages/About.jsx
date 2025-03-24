import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const myCompany = () => {
    navigate(`/mycompany/HelloShanideval`);
  };

  return (
    <div>
      About
      <button onClick={myCompany}>About company</button>
    </div>
  );
}

export default About;

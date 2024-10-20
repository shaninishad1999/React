import React from 'react';

const Button = ({ children, pt, pb, pl, pr }) => {
  const buttonStyle = {
    paddingTop: pt || '10px',
    paddingBottom: pb || '10px',
    paddingLeft: pl || '20px',
    paddingRight: pr || '20px',
    backgroundColor: '#0070f3', // Default button color

    
    color: 'white', // Text color
    border: 'none', // Remove default border
    borderRadius: '5px', // Rounded corners
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Smooth transition for hover effect
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#005bb5'; // Darken on hover
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#0070f3'; // Revert to original color
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;

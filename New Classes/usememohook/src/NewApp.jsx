import React, { useState, useMemo } from 'react';

const NewApp = () => {
  const [nm, setNum] = useState(0);
  const [subject, setSubject] = useState('');

  // Use useMemo to optimize expensive computation
  const myCount = useMemo(() => {
    if (!isNaN(nm)) { // Check if nm is a number
      return expensiveFun(nm);
    }
    return ''; // Return empty string if nm is not a number
  }, [nm]);

  return (
    <div>
      <p>-------------------------------------------------------------------------------------</p>
      Select Number:
      <input
        type="number"
        value={nm}
        onChange={(e) => setNum(parseInt(e.target.value) || 0)}
      />
      Enter Subject:
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      { !isNaN(nm) && <p>My Counting: {myCount}</p> }
    </div>
  );
};

// Expensive function (optimized)
function expensiveFun(mynum) {
  console.log("Running expensive function...");
  let result = mynum;
  for (let i = 0; i < 10000000; i++) {
    result *= 2; // Simulate heavy computation
  }
  return result;
}

export default NewApp;

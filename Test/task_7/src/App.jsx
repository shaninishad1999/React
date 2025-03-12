import React, { useState } from 'react';

const StudentForm = () => {
  const [rollNo, setRollNo] = useState('');
  const [name, setName] = useState('');
  const [physics, setPhysics] = useState('');
  const [chemistry, setChemistry] = useState('');
  const [math, setMath] = useState('');
  const [english, setEnglish] = useState('');
  const [hindi, setHindi] = useState('');
  const [totalMarks, setTotalMarks] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [division, setDivision] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'rollNo') setRollNo(value);
    else if (name === 'name') setName(value);
    else if (name === 'physics') setPhysics(value);
    else if (name === 'chemistry') setChemistry(value);
    else if (name === 'math') setMath(value);
    else if (name === 'english') setEnglish(value);
    else if (name === 'hindi') setHindi(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const total = parseFloat(physics) + parseFloat(chemistry) + parseFloat(math) + parseFloat(english) + parseFloat(hindi);
    const percent = (total / 500) * 100;

    setTotalMarks(total);
    setPercentage(percent);


    let studentDivision = '';
    if (percent >= 60) {
      studentDivision = 'First Division';
    } else if (percent >= 45 && percent < 60) {
      studentDivision = 'Second Division';
    } else if (percent >= 33 && percent < 45) {
      studentDivision = 'Third Division';
    } else {
      studentDivision = 'Fail';
    }
    setDivision(studentDivision);
  };

  return (
    <div>
      <h2>Student Result Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Roll No:
          <input type="text" name="rollNo" value={rollNo} onChange={handleInputChange} />
        </label><br />
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleInputChange} />
        </label><br />
        <label>
          Physics:
          <input type="number" name="physics" value={physics} onChange={handleInputChange} />
        </label><br />
        <label>
          Chemistry:
          <input type="number" name="chemistry" value={chemistry} onChange={handleInputChange} />
        </label><br />
        <label>
          Math:
          <input type="number" name="math" value={math} onChange={handleInputChange} />
        </label><br />
        <label>
          English:
          <input type="number" name="english" value={english} onChange={handleInputChange} />
        </label><br />
        <label>
          Hindi:
          <input type="number" name="hindi" value={hindi} onChange={handleInputChange} />
        </label><br />
        <button type="submit">Calculate Results</button>
      </form>
      {totalMarks > 0 && (
        <div>
          <h3>Results</h3>
          <p>Total Marks: {totalMarks}</p>
          <p>Percentage: {percentage.toFixed(2)}%</p>
          <p>Division: {division}</p>
        </div>
      )}
    </div>
  );
};

export default StudentForm;

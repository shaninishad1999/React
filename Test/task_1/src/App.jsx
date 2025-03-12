import React from 'react';

const App = () => {

  const styles = {
    outerCircle: {
      width: '650px',
      height: '300px',
      borderRadius: '50%',
      backgroundColor: 'yellow',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    squareBox: {
      width: '350px',
      height: '150px',
      backgroundColor: 'blue',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerCircle: {
      width: '200px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: 'red',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'white',
    },
  };

  return (
    <>
    <center>
    <div style={styles.outerCircle}>
      <div style={styles.squareBox}>
        <div style={styles.innerCircle}>
      
          <span style={styles.name}>Cybrom</span>
        </div>
      </div>
    </div>
    </center>
    </>
  );
};

export default App;

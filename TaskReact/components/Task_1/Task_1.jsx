import React from 'react';

const Task_1 = () => {
  return (
    <>
     
      <div
        style={{
          width: '700px', 
          height: '300px', 
          margin: '100px auto', 
          background: 'yellow',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '24px',
          textAlign: 'center',
          borderRadius: '50%',
          marginTop:"12%"
        }}
      >
        
        <div
          style={{
            width: '350px', 
            height: '200px', 
            backgroundColor: 'blue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '20px',
            border:"2px solid black"
         
          }}
        >
        
          <div
            style={{
              width: '300px',
              height: '100px',
              backgroundColor: 'red',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '20px',
              borderRadius: '50%',
              border:"2px solid black",
            }}
          >
            Cybrom
          </div>
        </div>
      </div>
    </>
  );
};

export default Task_1;

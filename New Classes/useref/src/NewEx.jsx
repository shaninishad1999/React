import React, { useRef } from 'react';

const NewEx = () => {
    const divRef = useRef(null);


    const setName = () => {
        divRef.current.innerText = "Cybrom";
    };



    

    
    const makeCircle = () => {
        divRef.current.style.borderRadius = "50%";
    };

    const changeToRed = () => {
        divRef.current.style.color = "red";
        divRef.current.style.backgroundColor = "lightblue";
        divRef.current.style.border = "2px solid red";

    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button onClick={setName}>Set Name</button>
            <button onClick={makeCircle}>Make Circle</button>
            <button onClick={changeToRed}>Make Red</button>

            <div 
                ref={divRef} 
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "blue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "20px auto",
                    transition: "all 0.3s ease"
                }}
            >
                
            </div>
        </div>
    );
};

export default NewEx;

import React, { useRef } from 'react';

const UseRefExample = () => {
    const textRef = useRef(null);

    const myCity = () => {
        textRef.current.value = "Bhopal";
    };

    const myBorder = () => {
        textRef.current.style.backgroundColor = "yellow";
        textRef.current.style.color = "green";
    };

    const myBgColor = () => {
        textRef.current.style.backgroundColor = "lightblue";
        textRef.current.style.color = "black";
    };

    return (
        <div>
            <button onClick={myCity}>Set City</button>
            <button onClick={myBorder}>Set Border</button>
            <button onClick={myBgColor}>Set Background Color</button>
            <br />
            Enter Input: <input type="text" ref={textRef} />
        </div>
    );
};

export default UseRefExample;

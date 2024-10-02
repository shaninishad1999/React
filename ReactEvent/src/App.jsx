const App = () => {
  const display = () => {
    alert("this is my event");
  };
  const myName = (name) => {
    alert(`My Name is : ${name}`);
  };
const Cybrom=(course,e)=>{
  alert(`My course : ${course} event object : ${e.type}`)
}
const eventTargetName=(nm,e)=>{
  let name=e.target.name 
  let value=e.target.value 

  alert("Name is : "+ name + " Value : "+value)

}

const textboxValue=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  alert("Name : "+ name+ " Value : "+value)
}
  return (
    <>
      <h1>
        Lorem ipsum dolor sit amet <button onClick={display}>click here</button>{" "}
        consectetur adipisicing elit. Provident, nulla.
      </h1>
      <button
        onClick={() => {
          myName("Shanideval");
        }}
      >
        Show Name
      </button>

      <button onClick={(e)=>{Cybrom("FullStack",e)}}>Click me to know</button><br />
      <button name="btn1" value="mybtn" onClick={(e)=>{eventTargetName("Shanideval",e)}}>Click Here to Know Event</button> <br />
      Enter City : <input type="text" name="city" value="Bhopal" onClick={textboxValue}/>
    </>
  );
};

export default App;

const App = () => {
  // alert function
  const display = (req, res) => {
    alert("This is alert box");
  };

  // show name
  const showName = (name) => {
    alert(`My Name is ${name}`);
  };

  // check event type
  const cybromCourse = (course, e) => {
    alert(`My course ${course} event object ${e.type}`);
  };
  //  eventTargetName
  const eventTargetName = (nm, e) => {
    let name = e.target.name;
    let value = e.target.value;

    alert("Name is : " + name + " Value : " + value);
  };

  //
  const textboxValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    alert("Name : " + name + " Value : " + value);
  };

  return (
    <>
      <h1>This is App Page</h1>
      {/* click for display alert */}
      <button onClick={display}>Display for alert</button> <br />
      <br />
      {/* click for my info */}
      <button
        onClick={() => {
          showName("Shanideval");
        }}
      >
        {" "}
        Show Name
      </button>{" "}
      <br />
      <br />
      {/* check event type */}
      <button
        onClick={(e) => {
          cybromCourse("MERN stack developer", e);
        }}
      >
        Event Type
      </button>{" "}
      <br />
      <br />
      {/* eventTargetName */}
      <button
        name="btn-4"
        value="My-Btn"
        onClick={(e) => {
          eventTargetName("Shanideval", e);
        }}
      >
        {" "}
        Target Name
      </button>{" "}
      <br />
      <br />
      Enter City :{" "}
      <input type="text" name="city" value="Bhopal" onClick={textboxValue} />
    </>
  );
};

export default App;

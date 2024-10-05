const MyCollege = (props) => {
  return (
    <>
      <h1>My Name : {props.myName}</h1>
      <h1>My Roll No. : {props.myrollno}</h1>
      <h1>College Name : {props.myclgName}</h1>
      <h1>College Address : {props.myclgAdr}</h1>
    </>
  );
};

export default MyCollege;

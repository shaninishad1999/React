
// store data in array form

// import { Fragment } from "react";

const MyCollege=(props)=>{
    return (

        <>

            <h1>Name : {props.myname} </h1>
            <h1>College Name : {props.myclgName} </h1>
            <h1> College Number : {props.clgNumber} </h1>
            <h1> College Addres : {props.adr}</h1>

        </>
    )
}



export default MyCollege;
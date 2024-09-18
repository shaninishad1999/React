import App2 from "./App2";
const name="Shanideval";
const age=30;
const sub= (<ol>
    <li>Php</li>
    <li>Oracle</li>
    <li>Java</li>
    <li>Asp</li>
    <li>Html</li>

</ol>)
const Cybrom=()=>{
    return(
    <div>

        {/* expression  */}
      <h1>Welcome to {name} Cybrom age : {age} and my future age {age*4}</h1>

        <h1>My subjects {sub}  </h1>
        <App2/>
    </div>
    )
}
export default Cybrom;
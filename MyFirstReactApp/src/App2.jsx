import New from "./New";

const App2=()=>{
    return(
        // sugar formet
        // fregment is important it is use 
        // <>write here content</>
        // if take div both are equal but
        //  fregement is not create extra element and node is create extra element
        <div>
            {/* they are create by createElement using js */}
            <h2>Hellow world</h2> 
            <h2>Hellow world</h2>
            <h2>Hellow world</h2>
            <h2>Hellow world</h2>
        <New/>
        </div>
    )
}
export default App2;
import React, {useState} from "react"
const Counter = () => {
    // initialise the couter state with default value of 0
const [counter,setCounter] = useState(0);
// functions 
// increament event
const increamentCounter = ()=>{
    setCounter(counter+1);
    }
// decreament event
const decreamentCounter = ()=>{
    setCounter(counter-1);
}
// reset event
const resetCounter = ()=>{
    setCounter(0);
}

    return (
        <div style={{textAlign:"center", marginTop:"20"}}>
            <h2>Couter App</h2>
            <h2>Counter: {counter}</h2>
            <button onClick={increamentCounter} style={{margin:"0 10px"}}>
                Increament +
            </button>
            <button onClick={decreamentCounter} style={{margin:"0 10px"}}>
                Decreament -
            </button>
            <button onClick={resetCounter} style={{margin:"0 10px"}}>
                Reset +
            </button>
        </div>
        
    )
};
export default Counter;
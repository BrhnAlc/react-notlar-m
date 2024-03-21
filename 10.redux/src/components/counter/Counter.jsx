
import { useState } from "react";
import "./Counter.css";


const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1 >{counter }</h1>
      <div>
        <button onClick={()=>setCounter(counter + 2)} className="counter-button positive">increase</button>
        <button onClick={()=>setCounter(0)} className="counter-button zero">reset</button>
        <button onClick={()=>setCounter(counter - 1)} className="counter-button negative">decrease</button>
      </div>
    </div>
  )
}

export default Counter

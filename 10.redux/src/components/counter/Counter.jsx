
import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { CLR, INC, DEC } from './../store/counterReducer';


const Counter = () => {

  // Global state'in okunması
  // const count=useSelector((state)=>state.count)


  // !root reducer sonrası consuming
  const count=useSelector((state)=>state.counter.count)

  // useDispatch custom redux hookudur..
 const dispatch=useDispatch()

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1 >counter:{count} </h1>
      <div>
        <button onClick={()=>dispatch({type:INC})} className="counter-button positive">increase</button>

        <button  className="counter-button zero" onClick={()=>dispatch({type:CLR})}>reset</button>

        <button  className="counter-button negative" onClick={()=>dispatch({type:DEC})}>decrease</button>
      </div>
    </div>
  )
}

export default Counter;

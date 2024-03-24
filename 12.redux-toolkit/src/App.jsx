

import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/counterSlice';




function App() {
 
const dispatch =useDispatch();

const {value} =useSelector(state=>state.counter)
const {country} =useSelector(state=>state.country)

console.log(value);

  return (
    <div>
      
         <span onClick={()=>dispatch(decrement())}>-</span>
      
       <span>{value}</span>
      
    
         <span  onClick={()=>dispatch(increment())}>+</span>
      </div>
      
    
  )
}

export default App;

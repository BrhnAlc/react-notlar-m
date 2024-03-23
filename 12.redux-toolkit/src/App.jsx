

import './App.css'
import { useDispatch } from 'react-redux';
import { decrement, increment } from './redux/features/counter/counterSlice';




function App() {
 
const dispatch =useDispatch();


  return (
    <div>
      <div onClick={()=>dispatch(decrement)}>
         <span>-</span>
      </div>
      <div> <span>{count}</span></div>
      
      <div onClick={()=>dispatch(increment)}>
         <span>+</span>
      </div>
      
    </div>
  )
}

export default App

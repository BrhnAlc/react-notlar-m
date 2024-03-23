
import { counterSlice } from './../features/counter/counterSlice';


export const store=configureStore({
    reducer:{
      conut :  counterSlice
    }
})
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
  }


  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        decrement: (state) => {
            state.value -= 1
          },
      increment: (state) => {
        state.value += 1
      },
      
      incrementCustom: (state, action) => {
        state.value += action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementCustom } = counterSlice.actions
  
  export default counterSlice.reducer
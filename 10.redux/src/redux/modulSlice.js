import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  modul:false,
}

export const modulSlice = createSlice({
  name: 'modul',
  initialState,
  reducers: {
    modulOpenFunc: (state) => {
      
      state.modul =!state.modul
    },
   
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { modulOpenFunc } = modulSlice.actions

export default modulSlice;
//  Redux Toolkit, Redux'u kullanmayı daha kolay hale getiren bir kütüphanedir.

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
//   başlangıçta sayacın değeri (value) 0 olarak ayarlanır.
}

export const counterSlice = createSlice({
    // Bu dilimin adı 'counter' olarak belirlenir ve başlangıç durumu initialState olarak atanır.
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
     

      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
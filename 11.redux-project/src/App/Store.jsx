import { configureStore } from '@reduxjs/toolkit'
// import {authReducer , newsReducer} from '../features/counter/counterSlice'


export const store = configureStore({
  reducer: {
    // auth :  authReducer,
    // api :  newsReducer,
  },
});
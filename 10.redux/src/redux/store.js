import { configureStore } from '@reduxjs/toolkit'
import modulSlice from './modulSlice'

export const store = configureStore({
  reducer: {
    modul:modulSlice
  },
})
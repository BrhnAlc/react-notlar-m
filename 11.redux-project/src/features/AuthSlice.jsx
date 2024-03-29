
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user : "",
}

// createSlice fonksiyonu, bir Redux slice oluşturur. Bu slice, bir isim (name), başlangıç durumu (initialState) ve bir dizi azaltıcı (reducers) içerir. Azaltıcılar, state üzerinde değişiklik yapmak için kullanılır.
const authSlice = createSlice({
    
    name : "auth" ,
    initialState,
    reducers:{
     setUser:(state , action)=>{
      state.user = action.payload
     },
     clearUser : (state)=>{
        state.user = ""
     }
    }
})


export const {setUser , clearUser} = authSlice.actions
export default authSlice.reducer

// authSlice içinde, setUser ve clearUser adında iki azaltıcı (reducer) tanımlanmıştır. setUser, state içindeki user alanını ayarlamak için kullanılır ve bir action nesnesinin getirdiği değeri bu alan içine yerleştirir. clearUser ise user alanını temizler, yani boş bir dizeye ("") ayarlar.
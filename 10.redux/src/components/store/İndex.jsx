import {legacy_createStore as createStore,combineReducers }from "redux"
import { counterReducer } from "./counterReducer"
import { todoReducer } from "./counterReducer"



// store'u oluşturduk..
// export const store =createStore(counterReducer)

const rootReducer=combineReducers({
  counter:counterReducer,
  todo:todoReducer,  
})

export const store=createStore(rootReducer)
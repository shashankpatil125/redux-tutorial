import { configureStore } from "@reduxjs/toolkit";
import { Task }  from "./reducer";
import reducer from "./reducer"; 



export const store = configureStore({
    reducer:{}
})
export type rootstate = ReturnType<typeof store.getState >  
export type AppDispatch = typeof store.dispatch


import {configureStore} from '@reduxjs/toolkit';//it has come from core redux
import todoReducer from '../features/todo/todoSlice';
export const store=configureStore({
    reducer:todoReducer
})
//pehle store bnaya phir reducers
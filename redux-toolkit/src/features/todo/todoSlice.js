import {createSlice,nanoid} from '@reduxjs/toolkit';
//initialState tells ki store starting me kaisa dikhega
const initialState={
    todos:[{id:1,text:"Hello World"}]
}
//slice reducer jo ki functionality h uska ek bada version h
//reducers me aate h properties or fns
//contextapi me fn ka declaration kr rhe the uski definition nhi likh rhe the yha def bhi dena h
//andr vale fn me do chizo ka access milega state,action
//nanoid hr baar ek unique id generate krk dega
//payload ek obj h obj me kuch bhi aa skta id vgairah
//action value ko access krne k lie use hota
//state current state ko access deta
//pehle to jitni functionality h usko export krenge
//store ko bhi awareness chahie sare reducers k baare me
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
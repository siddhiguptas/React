import React,{useContext,createContext} from "react"

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})

export const useTodo=()=>{
    return(
        useContext(TodoContext)
    )
}

//itna lengthy TodoContext.Provider ye na likhna pade isliye maanlo name change krlete todoprovider se
export const TodoProvider=TodoContext.Provider


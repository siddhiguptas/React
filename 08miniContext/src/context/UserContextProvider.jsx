import React from "react"
import { UserContext } from "./UserContext"; 

//children ek generic naam h ki jo bhi chiz aa rhi use as it is pass kr do
//context k sath provider bnana padta h data provide krne k liye
//provider bnane k 2 steps hote
const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;
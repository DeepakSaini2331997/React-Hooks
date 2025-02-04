import React,{ createContext, useState } from "react"

export const loginContext = createContext()
const LoginContextProvider = ({children}) =>{
    const [userDetails,setUserDetails] = useState({name:"deepak"})
    return(
        <loginContext.Provider value={userDetails}>
            {children}
        </loginContext.Provider>
    )
}

export default LoginContextProvider
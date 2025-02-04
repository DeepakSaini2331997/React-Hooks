import React, {useContext} from "react";
import {loginContext} from "./context/loginContextProvider";
const ChildComponents = () =>{
    const userDetails = useContext(loginContext)
    return(
        <div>
            This is child Components<br></br>
            {
                userDetails.name
            }
        </div>
    )
}

export default ChildComponents;
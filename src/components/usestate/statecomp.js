import React, { useState } from "react"

const Statecomp = ()=>{
    const [text,setText] = useState("This is default text");
    const [button,setButton] = useState('')
    const [changeName,setChangeName] = useState("Deepak")
    const changeNameFun = ()=>{
        changeName==='Deepak'?setChangeName('Sonu'):setChangeName('Deepak')
    }
    return(
        <div>
           <h2>Discuss usestate</h2><hr></hr>
           <p>
            {
                text
            }
            <br></br>
            {
                button?
                <button onClick={()=>{setText('This is default text'); setButton(false)}}>change text</button>:
                <button onClick={()=> {setText('Change Text is done'); setButton(true)}}>change text</button>
            }
            
           </p>
          
          <h2>Toggle</h2>

          {
            changeName
          }
          <br></br>
          <button onClick={changeNameFun}>Click me</button>

        </div>
    )
}

export default Statecomp;
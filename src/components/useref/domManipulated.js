import { useRef } from "react";

const DomManipulated = () =>{
    const inputType = useRef()
    const handleInput =()=>{
        // return object with properties current
        console.log(inputType)
        inputType.current.style.width ="300px"
    }
    return(
        <div>
            <input type="text" ref={inputType}/>
            <button onClick={handleInput}>Click me</button>
        </div>
    )
}

export default DomManipulated;
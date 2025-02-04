import { useEffect, useRef, useState } from "react";

const CountRef = ()=>{
    const [text,setText] = useState("");
    //const [count,setCount] = useState(0)
    const count = useRef(0)
    useEffect(()=>{
        //setCount((prev)=>prev+1)  

        // return object with properties current
        count.current = count.current+1;
    })
    return (
        <div>
            inputCount:{
                count.current
            } and Text: {
                text
            }
            <br></br>
            <input type="text" onChange={(e)=>{setText(e.target.value);}}/>
            <br></br>
            

           
        </div>
    )
}

export default CountRef;
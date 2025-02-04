import React, { useState, useEffect } from "react";
const Effectcomp = ()=>{
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log('Call useeffcet after render and chnage in components than call')
        document.title = `click count ${count}`
    });

    useEffect(()=>{
        console.log('Call useeffcet after render only once Because blank depnedancies[]')
    },[]);

    return (
        <div>
            <h2>UseEffect function</h2><br></br><br></br>
            <p>Title change and Open console to show the useeffect</p>
            {
                count
            }<br></br>
            <button onClick={()=>setCount(count+1)}>click count</button>
        </div>
    )
}

export default Effectcomp;
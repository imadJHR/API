import React, { useState  , useEffect, useRef , } from 'react'


function HooksApi() {
    const [Data,setData] = useState(0)
    const r = useRef(null)
    
    useEffect(()=>{
        document.title = `you clicked ${Data} times`
      })
      useEffect(()=>{
       r.current.focus();
      
      })
    return (
    <>
      <h1 ref={r}>HooksAPi</h1>
      <h2>counter value is {Data}</h2>
      <div className='Allbutton'>
            <button onClick={()=>setData(Data+1)}>+</button>
            <button onClick={()=>setData(Data-1)}>-</button>
            <button onClick={()=>setData(0)}>Reset</button>
            <input type="text" placeholder='your mail ...' />
            <button onClick={()=>setData}>Add</button>

    
      </div>
   
 
    
    

    </>
  )
}

export default HooksApi
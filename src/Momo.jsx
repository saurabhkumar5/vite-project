import React, { useEffect, useState } from 'react'

function Momo() {

         const [number,setNumber]   = useState(0)
         const [name,setName]   = useState(10)

          useEffect(()=>{
            console.log("hello from useEffect hook")
          },[name])

  return (
    <>
      <h1>increment{number}</h1>
      <h1>decmrent{name}</h1>
      <button onClick={()=>setNumber(number+2)}>inc+</button>
      <button onClick={()=>setName(name-2)}>dec-</button>
    </>
  )
}

export default Momo
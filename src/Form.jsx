import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("aman")
    const [number, setNumber] = useState()
    const [value,setValue] = useState()
    const [numberr,setNumberr] = useState()

    const handle = (e)=>{
           e.preventDefault()
        //    console.log("submit")
        // console.log(name,number)
        setValue(name)
        setNumberr(number)
    }
  return (
    <>
   <h1>{value}</h1>
   <h1>{numberr}</h1>
    <form onSubmit={handle}>
        name<input type='text' value={name}  placeholder='enter your name' onChange={(e)=>setName(e.target.value)}/>
        number<input type='number' value={number}  placeholder='enter your number' onChange={(e)=>setNumber(e.target.value)}/>
        <button>submit</button>
    </form>
    </>
  )
}

export default Form
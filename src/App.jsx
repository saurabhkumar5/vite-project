// import { useState } from 'react'
// import { AiFillAmazonSquare } from "react-icons/ai";
// import { AiFillAndroid } from "react-icons/ai";
// import './App.css'


// function App() {

//        const [name,setName]  = useState("sumit")
//       //  const [value,setValue] = useState(12)
//           // console.log(a)
//           // b("kullu")

//           // function Inc(){
//           //   b(a+2)
//           // }


//           const handle = ()=>{
//             setName(name=="sumit"?"amit":"sumit")
//           }

//   return (
//     <>
//       <h1>{a}</h1>
//       <button onClick={Inc}>inc+</button>
//       <button onClick={()=>b(a-1)}>dec-</button>
      
//       <h1>{name}</h1> <AiFillAmazonSquare /><AiFillAndroid />
//       <button onClick={handle}>click</button>
//     </>
//   )
// }

// export default App








import React from 'react'
import Momo from './Momo'
import Header from './Header'
import './App.css'
import Api from './Api'
import Nasa from './Nasa'
import Github from './Github'
import Form from './Form'

function App() {

  return (
    <div>
      {/* <Api/> */}
      {/* <Momo/> */}
      {/* <Nasa/> */}
      {/* <Github/> */}
      <Form/>
      
    </div>
  )
}

export default App
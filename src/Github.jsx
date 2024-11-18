import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Github.css'

function Github() {
      
        const [git,setGit] = useState({})
         console.log(git)
     useEffect(()=>{
        axios.get('https://api.github.com/users/saurabhkumar5')
          .then((value)=>setGit(value.data))
     },[])
       
  return (
    <div>
      <img src={git.avatar_url}/>
        <h1>followers:{git.followers}</h1>
        <h1>following:{git.following}</h1>
    </div>
  )
}

export default Github
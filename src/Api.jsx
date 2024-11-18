import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Api.css'

function Api() {

    

         const [api, setApi]   =  useState([])

        //  console.log(api)
         
        useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
                 .then((value)=>{
                setApi(value.data)
            })

        },[])
             



            //    .then((value)=>{
            //   var z  = value.data.map((a)=>{
            //         // console.log(a.name)
            //         return a.name
                    
            //      })
            //      console.log(z)
            //    }
            // )
      
              
  return (
    <>
    <h1>kullu</h1>
    {
      api.map((value)=>{
        // console.log(value.name)
        return(
            <h1 className='api'>name:{value.name},email:{value.email},address:{value.address.street}</h1>

        )
      })
    }
    </>
  )
}

export default Api





import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Nasa() {

    const [nasa,setNasa]    = useState([])
  

    useEffect(()=>{

        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY')
            .then((value)=>{
                setNasa(value.data.photos)
            })
            
    //    .then((value)=>console.log(value.data.photos))
    },[])


  return (
    <>
    {
        nasa.map((a)=>{
              console.log(a.img_src)
              return(
                <>
                <img src={a.img_src}/>
                </>
              )
        })
    }
    </>
  )
}

export default Nasa
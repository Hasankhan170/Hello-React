// // import { useState } from "react"

import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"




// import Cards from "./components/cards"


// function App() {

//   function Hello(){
//     console.log("Hello World")
//   }
//   // const [data,setData] = useState(0)

//   // function counterPlus(){
//   //   setData(data + 1)
//   // }


//   return (
//     <>
//         <h1>hello world</h1>
//         <Cards heading= "Pubg" title= "lorem" price= "2312" />
//     </>
//   )

// }

// export default App

// import { useEffect, useState } from "react";

// function App(){
//   const [data,setData] = useState(0)

//   useEffect(()=>{
//     const timer = setInterval(()=>{
//       setData(preData => preData + 1)
//     },1000)

//     return ()=>{
//       clearInterval(timer)
//     }
    
//   },[])
//   return(

//     <>
//         <h1>Hello World{data}</h1>
//         <div>
//           Timer : {data}
//           </div>
//     </>
    
//   )
// }

// export default App;


export default function App() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res.data);
            setUsers(res.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
  return (
    <>
    <div>
        {
            users.map((item,index)=>{
                return (
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.email}</p>
                        <hr />
                    </div>
                )
            })
        }
    </div>
    </>

  )
}


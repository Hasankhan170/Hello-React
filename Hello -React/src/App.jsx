// // // // import { useState } from "react"

// import axios from "axios"
// import { useEffect, useRef, useState } from "react"



// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Images from "./components/Images";
// import RightFlowerImage from "./components/RightFlowerImage";

// // import axios from "axios"
// // import { useState } from "react"
// // import { useEffect } from "react"
// // import Cards from "./components/cards"




// // // import Cards from "./components/cards"


// // // function App() {

// // //   function Hello(){
// // //     console.log("Hello World")
// // //   }
// // //   // const [data,setData] = useState(0)

// // //   // function counterPlus(){
// // //   //   setData(data + 1)
// // //   // }


// // //   return (
// // //     <>
// // //         <h1>hello world</h1>
// // //         <Cards heading= "Pubg" title= "lorem" price= "2312" />
// // //     </>
// // //   )

// // // }

// // // export default App

// // // import { useEffect, useState } from "react";

// // // function App(){
// // //   const [data,setData] = useState(0)

// // //   useEffect(()=>{
// // //     const timer = setInterval(()=>{
// // //       setData(preData => preData + 1)
// // //     },1000)

// // //     return ()=>{
// // //       clearInterval(timer)
// // //     }
    
// // //   },[])
// // //   return(

// // //     <>
// // //         <h1>Hello World{data}</h1>
// // //         <div>
// // //           Timer : {data}
// // //           </div>
// // //     </>
    
// // //   )
// // // }

// // // export default App;


// // // export default function App() {
// // //     const [users, setUsers] = useState([])

// // //     useEffect(()=>{
// // //         axios('https://jsonplaceholder.typicode.com/users')
// // //         .then((res)=>{
// // //             console.log(res.data);
// // //             setUsers(res.data)
// // //         })
// // //         .catch((error)=>{
// // //             console.log(error);
// // //         })
// // //     },[])
// // //   return (
// // //     <>
// // //     <div>
// // //         {
// // //             users.map((item,index)=>{
// // //                 return (
// // //                     <div key={index}>
// // //                         <h2>{item.name}</h2>
// // //                         <p>{item.email}</p>
// // //                         <hr />
// // //                     </div>
// // //                 )
// // //             })
// // //         }
// // //     </div>
// // //     </>

// // //   )
// // // }





// // function App() {

// //     const [ users, setUsers] =  useState([])

// //     useEffect(()=>{
// //                axios('https://jsonplaceholder.typicode.com/users')
// //            .then((res)=>{
// //                    console.log(res.data);
// //               setUsers(res.data)
// //                 })
// //            .catch((error)=>{
// //                  console.log(error);
// //                })
// //             },[])


// //             return (
// //                 <>
// //                 <div>
// //         {
// //             users.map((item,index)=>{
// //                 return (
// //                     <div key={index}>
// //                         <h2>{item.name}</h2>
// //                         <p>{item.email}</p>
// //                         <p>{item.price}</p>
// //                         <hr />
// //                     </div>
// //                 )
// //             })
// //         }
// //     </div>
// //                 </>
// //             )

// // //     const [counter,SetCounter] = useState(0)
// // //   return (
// // //     <>
// // //     <h1>Gym {counter}</h1>
// // //     <button onClick={()=> SetCounter(counter + 1)}>ADD</button>
// // //     <button onClick={()=> SetCounter(counter - 1)}>less</button>

// // //     {
// // //         counter >= 20 ? <Cards heading= "best gym" title= "hogaya admission" /> : counter >= 10 ? <Cards heading= "best gym" title= "allowed but 1k extra charge" /> : <h1>not allowed</h1>
// // //     }
   


// // //     </>
// // //   )
// // }

// // export default App




// const App = () => {
//   return (
//     <>
//   <div className="img-new-component-23"> {/* Add relative */}
  
//   <Images src="../assests/Rectangle 3.png" title="Image 1" name="img1" animation="fade-left" />
//   <Images src="../assests/Rectangle 3.png" title="Image 2" name="img2" animation="fade-right" />
//   <Images src="../assests/Rectangle 3.png" title="Image 3" name="img3" animation="fade-up" />
//   <Images src="../assests/Rectangle 3.png" title="Image 4" name="img4" animation="fade-left" />
//   <Images src="../assests/Rectangle 3.png" title="Image 1" name="img1" animation="fade-left" />
//   <Images src="../assests/Rectangle 3.png" title="Image 2" name="img2" animation="fade-right" />
//   <Images src="../assests/Rectangle 3.png" title="Image 3" name="img3" animation="fade-up" />
//   <Images src="../assests/Rectangle 3.png" title="Image 4" name="img4" animation="fade-left" />
//   <Images src="../assests/Rectangle 3.png" title="Image 1" name="img1" animation="fade-left" />
//   <Images src="../assests/Rectangle 3.png" title="Image 2" name="img2" animation="fade-right" />
//   <Images src="../assests/Rectangle 3.png" title="Image 3" name="img3" animation="fade-up" />
//   <Images src="../assests/Rectangle 3.png" title="Image 4" name="img4" animation="fade-left" />
//   <Images src="../assests/Rectangle 3.png" title="Image 1" name="img1" animation="fade-left" />
//   <Images src="../assests/Rectangle 3.png" title="Image 2" name="img2" animation="fade-right" />
//   <Images src="../assests/Rectangle 3.png" title="Image 3" name="img3" animation="fade-up" />
//   <Images src="../assests/Rectangle 3.png" title="Image 4" name="img4" animation="fade-left" />
 
// </div>

    
//     </>
//   )
// }

// export default App


// const App = () => {
//   const inputValue = useRef()
//   const [todo,setTodo] = useState(null)

//   useEffect(()=>{
//     axios('http://localhost:3000/todos')
//     .then((res)=>{
//       console.log(res.data.data);
//     }).catch((err)=>{
//       console.log(err);
//     })

//   },[])
//   const userValue = (event)=>{
//     event.preventDefault()
//     console.log(inputValue.current.value);
    
//   }
//   return (
//     <>
//     <h1>todo app</h1>
//     <form onSubmit={userValue}>
//       <input type="text" ref={inputValue} placeholder="enter todo" />
//       <button type="submit">Todo Add</button>
//     </form>
//     </>
//   )
// }

// export default App



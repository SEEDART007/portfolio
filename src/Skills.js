import React from 'react'
import Design from './Design.css'
import Lottie from 'lottie-react'
import horse from './horse.json'
import animation1 from './animation1.json'
import animation2 from './animation2.json'
import animation3 from './animation3.json'
import animation4 from './animation4.json'
import animation5 from './animation5.json'
import mongo from './mongodb.jpg'
import tailwind from './police.png'
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import First from './First'

function Skills() {
    const navigate=useNavigate()
    const handleOnClick=()=>{
         navigate('/')
    }
  return (

//     <div id='container' className='container  shadow-slate-950'>
//     <div className=' flex'>
//         <div className='buttons flex'>
//             <div className='newbtn '>
//             <Lottie className='animation1 ' animationData={animation1}/>
//       <Lottie className='animation1 ' animationData={animation2}/><br/>
//        <Lottie className='animation1' animationData={animation3}/><br/>
//        <Lottie className='animation1' animationData={animation4}/><br/>
//        <Lottie className='animation1' animationData={animation5}/>
//         </div>
//         </div>
//     <div className='circle'>
//         <h1 className='name'>I <br/>Am<br/>Siddhartha</h1>
//         <h2 id='write'></h2>
//     </div></div>
  
// </div>
<div className='newCont'>
    <div className='container2'>
    <div className=' flex'>
      <Lottie className='animation1 ' animationData={animation1}/>
      <Lottie className='animation1 ' animationData={animation2}/><br/>
      <Lottie className='animation1' animationData={animation3}/><br/>
      <Lottie className='animation1' animationData={animation4}/><br/>
      <Lottie className='animation1' animationData={animation5}/>
      
      <button className='homebtn' onClick={handleOnClick} ><FaHome className='icon'/></button> 
      
    </div>
    <div className=' flex'>
      <img className='animation2 float-left' src={mongo}/>
      <img className='animation3 float-left' src={tailwind}/>
      </div>
      </div>
      </div>
  )
}

export default Skills

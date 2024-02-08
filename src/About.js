import React from 'react'
import Design from './Design.css'
import Lottie from 'lottie-react'
import { FaHome } from "react-icons/fa";
import diamond from './diamond.json'
import { useNavigate, useNavigation } from 'react-router-dom';
import ball from './ball.json'

function About() {
    const navigate=useNavigate('')
    const handleOnClick=()=>{
        navigate('/')
   }
  return (
    <div className='docker'>
        <div className=' flex'>
        <div className='myname '>
            I Am<br/><span className=' bg-fuchsia-600'> From<br/><b> Kharagpur</b></span>
        </div>
        <Lottie className='myname12' animationData={diamond}/>
        <button className='homebtn active:bg-blue-900' onClick={handleOnClick} ><FaHome className='icon'/></button> 
    </div>
      <div className=' flex'>
    <Lottie className='ball' animationData={ball}/>
        <div className='myname2'>
           <span className=' bg-amber-300'> Im A Passionate</span><br/><b className='mern bg-zinc-50'>MERN</b><br/><span className=' bg-green-200'>Developer</span> 
        </div></div>
        <div className='myname3'>
           I <span className='heart'>❤️</span> To <br/> Create Websites
        </div>
        <div className='myname5 '>
           Just Want To Contribute To<br/> The Community And Make<br/><b><span className=' bg-orange-700'> This World A Better Place To Live In.</span></b>
        </div>
      
    </div>
  )
}

export default About

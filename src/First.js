import React, { useEffect, useState } from 'react'
import index from './index.css'
import Design from './Design.css'
import horse from './horse.json'
import Lottie from 'lottie-react'
import Skills from './Skills'
import Projects from './Projects'
import { BrowserRouter, Routes, Route,Link, useNavigate } from "react-router-dom";
import About from './About'
import Links from './Links'

function First() {
const navigate=useNavigate();
const[link,setLink]=useState()
let door;
    function writeAfterDark(){
        door=document.getElementById('write')
        door.innerText="An Aspiring Web Developer"
        door.style.color='white'
    }
    let newTime;
    useEffect((e)=>{
        newTime=setTimeout(()=>{
            
            
            writeAfterDark()
            
        },1000)
        
    },[])
    const handleClick=()=>{
        clearTimeout(newTime)
        navigate('Skills')
    }
    const handleClick1=()=>{
        clearTimeout(newTime)
        navigate('Projects')
    }
    const handleClick2=()=>{
        clearTimeout(newTime)
        navigate('About')
    }
    const handleLinks=()=>{
        const btn=document.getElementById('69')
        btn.disabled=true;
        const circle=document.getElementById('21')
circle.style.display='none';
setLink(true)
    }
    
 
  return (
   <div id='container' className='container  shadow-slate-950'>
        <div className=' flex'>
            <div className='buttons block'>
                <div className='newbtn'>
            <button onClick={handleClick1}  className='btn1 active:bg-green-500  hover:skew-y-12 '>My Projects</button><br></br>
            <button onClick={handleClick} className='btn2  hover:skew-y-12   block'>Skills</button>
            <button onClick={handleClick2} className='btn3  hover:skew-y-12   block'>About</button>
            <button onClick={handleLinks} id='69' className='btn4  hover:skew-y-12  '>Links</button>
            </div>
            <Lottie className='   h-72 w-60' animationData={horse}/>
            </div>
        {/* <div id='21' className='circle'>
            <h1 className='name'>I <br/>Am<br/>Siddhartha</h1>
            <h2 id='write'></h2>
        </div> */}
        
{
    (() => {
      if(link) {
        return (<Links className='gensin'/>);
      }else{
         return( <div id='21' className='circle'>
         <h1 className='name'>I <br/>Am<br/>Siddhartha</h1>
         <h2 id='write'></h2>
     </div>)
      }
    })()
    }
    </div>
    </div>
  )
}

export default First

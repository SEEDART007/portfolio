import React from 'react'
import image from './weatherimg.png'
import image2 from './newsimg.png'
import Lottie from 'lottie-react'
import { FaHome } from "react-icons/fa";
import proket from './proket.json'
import dict from './dict.png'
import {DefaultPlayer as video} from 'react-html5video'
import introVideo from './vdo.mp4'
import { useNavigate } from 'react-router-dom';


function Projects() {
    const navigate=useNavigate('')
    const handleOnClick=()=>{
        navigate('/')
   }
  
   let isPlaying=false;
   
   const OnClick=()=>{
    
        let video=document.getElementById('video')
        if(isPlaying){
            isPlaying=false;
            video.pause()
        }else{
            video.play();
            isPlaying=true;
        }
        
    }
    
      
      
  return (
    <>
    <div className='square-wrapper'>
        <div className='head flex'>
    <Lottie className='ikonu' animationData={proket} /><h1 >PROJECTS</h1>      <button className='homebtn active:bg-blue-900' onClick={handleOnClick} ><FaHome className='icon'/></button> </div>
       <div className='inputClass flex'>
        <img src={image} className='square'></img>
        <div className='writings'>
        <h1 className='heading ' >Weather App <p className='box5'>This is a weather applications which gives you the current weather status of a specific place,It uses live api calls and fetch the data from api. Just type the name of the place and you will get the temperature and wind speed details of a current place!!!
        </p></h1></div></div>
        <div className='inputClass flex'>
        <div className='writings'>
        <h1 className='heading ' >NeuZera <p className='box5'>This is a News Application and it uses fetch method to fetch data or news via api calls, Shows current news and time....!!
        </p></h1></div>
        <img src={image2} className='square'></img></div>
        <div className='inputClass flex'>
        <img src={dict} className='square'></img>
        <div className='writings'>
        <h1 className='heading ' >Dictionary <p className='box5'>This is a dictionary which will help you to find out the desired word meanings what you want.It uses api which will fetch the meaning of a specific word and shows to you on the screen.The copy text button copies the content!!
        </p></h1></div></div>
   
        <div className='inputClass1  mt-56'>
        <video id='video' className='  ml-28' width="1000" height="500"  loop >
        <source src={introVideo} type="video/mp4"/>
   </video>
        <button className='videoBtn  to-blue-900 bg-lime-300 active:bg-lime-800 h-10 rounded-2xl  ml-28 mt-10  p-1 border-slate-700' onClick={OnClick}>START/STOP Video</button>
        <div className='writings1'>
        <h1 className='heading mt-4 ' >Blogerzz<p className='box5'>This is a Blog Application which lets you post your Blogs, Save it in database(MongoDB) and fetch the data using axios via express.js,It lets you to delete the previous blogs...The blogs will not only deleted from the client side but also from the database...It also lets you to edit the blog and save it..I made it using <b>MERN</b> Stack and it is a full fledgit blog posting application 
        </p></h1></div></div></div>

      </>
  )
}

export default Projects

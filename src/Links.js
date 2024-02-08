import React from 'react'
import Design from './Design.css'
import Lottie from 'lottie-react'
import git from './gittu.json'
import inn from './linkedin.json'
import x from './xen.json'
function Links() {
  return (
    <div className='links'>
        <div className='bux flex'>
           <a href='https://twitter.com/ChakSeed66288'> <Lottie className='x' animationData={x}/></a> 
            <a href='https://github.com/SEEDART007'> <Lottie className='x1' animationData={git}/></a>
            <a href='https://www.linkedin.com/in/siddhartha-chakraborty-680a58281'> <Lottie className='x2' animationData={inn}/></a>
      </div>
    </div>
  )
}

export default Links 

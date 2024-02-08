import React from 'react'
import First from './First'
import Skills from './Skills'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './Projects';
import About from './About';
import Links from './Links';

function App() {
  return (
    <div>
       <BrowserRouter basename="/portfolio" >
      <Routes >
          <Route path="/" element={<First />} />
        <Route path="/Skills" element={<Skills />}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Links" element={<Links/>}/>
        <Route path="/Projects" element={<Projects/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App


import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home/home"
import Nav from "./components/Nav/nav"
import Project from "./components/Project/project"
import About from "./components/About/about"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
         <Route path='/'  element={<Home />}/>
         
        
         <Route path='/about'  element={<About />}/> 
         
         <Route path='/project'  element={<Project />} />
         
         <Route path='contact'  element={<Contact />}/>
        
        </Routes>
        <Footer />
      </div>
    </Router>


  )
}

export default App
import React from 'react';
import "./home.css";
import CTA from "./CTA"
import Mamepic from "../../assets/mame.png"

const Home=()=>{
  return (
    <header>
      <div className="container header_container">
       <div className='headertxt'>
         <h5 > Welcome I'm</h5>
          <h1>  <strong>Mohammed</strong> Ahmed</h1>
          <h4> A Graphics Designer: Brand and Logo Designer </h4>
          <p className="text-light">
          "Discover my world of creative design—where passion meets innovation.
           Explore my diverse portfolio and experience art in every detail. 
            Together, let's bring your ideas to life with a touch of visual magic."
          </p>
          <CTA />
       </div>
          <div>
             <img  className='mamePic' src={Mamepic} alt="profilePic" />
          </div>

      </div>

    </header>
  
  );
}
export default Home
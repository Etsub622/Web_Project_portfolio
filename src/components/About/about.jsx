import React from 'react';
import "./about.css";
import MamePic from "../../assets/mame.png";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

function about() {
  return (
    <div className='about_container'>
      <div className='profile'>
        <h5> About me </h5>
        <img src={MamePic} alt="mame's pic"/>
        <h5> Graphics Designer </h5>
        <p> 
I'm Mohammed Abdela, also known as Yomame, a seasoned graphics designer, video editor, and logo maker with a year of professional experience.
 A graduate in Graphics Design and Digital Marketing from a reputable academy, my goal is to seamlessly blend client requirements with my expertise to deliver exceptional results.</p>
    </div>
      <div className='about_cards'>
          <article className='about_card'>
             <FaAward className='about_icon'/>
             <h5> Experience </h5>
             <small> 1+ year Experience </small>
          </article>

          <article className='about_card'>
             <VscFolderLibrary className='about_icon'/>
             <h5> Projects </h5>
             <small> Worked for different clients </small>
          </article>

          <article className='about_card'>
             <FiUsers className='about_icon'/>
             <h5> Work </h5>
             <small> Quality over Quantity </small>
          </article>

      </div>
    </div>
      
      
      
    
  )
}

export default about
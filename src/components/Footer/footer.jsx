import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faFacebook,
  faTiktok,
  faInstagram
  
} from "@fortawesome/free-brands-svg-icons";
function contact() {
  return (
    <div className='dorik'> 
       {/* <div>
          <h3>Get in Touch</h3>
       </div> */}
       <div>
        
       <a href="https://t.me/yo_mame" target='_blank' rel="noopener noreferrer"
        className="telegram social">
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61550616536115&mibextid=ZbWKwL" target='_blank' rel="noopener noreferrer"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="http://tiktok.com/@_yo_mame_" className="tiktok social" target='_blank' rel="noopener noreferrer"> 
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
      <a href="https://instagram.com/_offical_yo_mame_?igshid=a2k3MWhlejNlNzh6" target='_blank' rel="noopener noreferrer"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

       </div>
      
       
  </div>
  )
}
export default contact
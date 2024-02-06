import React from "react";



const Card = props=>{
    return(
      
     
        <div className="card text-center container  ">
        
        <div className="pictures">
          <div className=" pic ">
          <img src={props.image} alt="pic1" />
        </div>

          </div>
        
    
      </div>
    
  
       
    );
}
export default Card;
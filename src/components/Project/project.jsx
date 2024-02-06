import React, { Component } from "react";
import Card from  "./projectUI";
import "./project.css"
import img1 from  "../../assets/sofa.jpg";
import img2 from  "../../assets/adwa.jpg"; 
import img3 from  "../../assets/burger.jpg";
import img4 from  "../../assets/BURGER BILBORD.jpg";
import img5 from  "../../assets/FOOD.jpg";
import img6 from  "../../assets/FOOD 2.jpg";
import img7 from  "../../assets/green.jpg";
import img8 from  "../../assets/green bilbord.jpg";
import img9 from  "../../assets/pizza.jpg";
import img10 from "../../assets/pizza bilbord.jpg";
import img11 from "../../assets/fruit.jpg";
import img12 from "../../assets/FRUIT BILBORD.jpg"
import img13 from "../../assets/food colab.jpg";
import img14 from "../../assets/food bilbord.jpg";
import img15 from "../../assets/chocolate and p.butter.jpg";
import img16 from "../../assets/cr7 1.jpg";
import img17 from "../../assets/wild.jpg";
import img18 from "../../assets/wild billbord.jpg";
import img19 from "../../assets/sofa billbord.jpg";
import img20 from "../../assets/frni.jpg";
import img21 from "../../assets/for dj.jpg";
import img22 from "../../assets/yo bs colab.jpg";
import img23 from "../../assets/rophnan yo.jpg";
import img24 from "../../assets/happy.jpg";
import img25 from "../../assets/biruk.jpg";






class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          id: 1,
          image: img22,
        
        },
        {
            id: 2,
            image: img24,
          
          },
          {
            id: 3,
            image: img2,
            
          },
          {
            id: 4,
            image: img23,
          
          },
          {
            id: 5,
            image: img25,
        
          },
          {
            id: 6,
            image: img21,
         
          },
          {
            id: 7,
            image: img16,
         
          }, {
            id: 8,
            image: img20,
           
          }, {
            id: 9,
            image: img1,
           
          }, {
            id: 10,
            image: img19,
          
          }, {
            id: 11,
            image: img17,
           
          }, {
            id: 12,
            image: img18,
   
          }, {
            id: 13,
            image: img3,
        
          }, {
            id: 14,
            image: img4,
       
          }, {
            id: 15,
            image: img7,
          
          }, {
            id: 16,
            image: img8,
    
          }, {
            id: 17,
            image: img9,
         
          }, {
            id: 18,
            image: img10,
           
          }, {
            id: 19,
            image: img13,
          
          }, {
            id: 20,
            image: img14,
            
          }, {
            id: 21,
            image: img6,
    
          }, {
            id: 22,
            image: img5,
       
          }, {
            id: 23,
            image: img11,
           
          }, {
            id: 24,
            image: img12,
           
          }, {
            id: 25,
            image: img15,
         
          },
       
      ],
    };
  }

  render() {
    return (
      <div className="cont">
       
      <div className="container">
        <div className="pictures">
          {this.state.cardData.map((card) => (
            <div key={card.id}>
              <Card
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  }
}

export default Cards;

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../Asserts/1.jpg";
import Img2 from "../Asserts/2.jpg";
import Img3 from "../Asserts/3.jpg";

function NoTransitionExample() {
  return (
    <div>
      <Carousel slide={false}>
       <Carousel.Item>
         <img className="d-block w-100" src={Img1} alt="First slide" />
         <Carousel.Caption>
           <h3>The Coding Ground</h3>
           <p>Was just preparing for interview</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img className="d-block w-100" src={Img2} alt="Second slide" />

         <Carousel.Caption>
           <h3>Second slide label</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img className="d-block w-100" src={Img3} alt="Third slide" />

         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel> 
    </div>
  );
}

export default NoTransitionExample;

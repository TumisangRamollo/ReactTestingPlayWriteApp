import React from "react";
import Images from "./Images";
import Modal from "./Modal";
import Navigation from './Navigation'

function Contents(props) {
    const {values} = props

    console.log('values', values[1])
  return (
    <div className="DisplayContainer">
      <div className="Side1" style={{color:"black"}}>
      <Navigation />
      
        <div className="Side1BodyContainer" style={{color:"black", margin:"auto"}}>
        <h1>Ramollo Samuel Tumisang </h1>
        <h2>(Well know as Tumisang / Tumi) </h2>
        <h2><small><u>Junior Software Developer</u></small></h2>

{/* 
          <h2>This is a fun presentation to introduce you to the team!</h2>
          <h2>Limit of about 10 to 15 minutes. And ~10 minutes questions</h2>
          <h2>Intro Slide:</h2>
          <h2><small>Title (Could be just your name) CEO, Feather & Hat Productions - Make
          a logo for this A quote .
          
          Tell us something about you What do you think you're really
          good at? 
          
          What do you do for fun? 
          
          What pet peeves do you have?       
          Quick fire (choose one in each of the following): Heinz or AllGold Drinking
          or Sober Coffee or Tea Cats or dogs Year goal Include at least 5        
          photos!</small></h2> */}


        {/* <div className="ButtonContainer">
          <input
            id="button"
            className="PreviousButton"
            type="button"
            value="Previous"
          /> */}
          {/* <input
            id="button"
            className="NextButton"
            type="button"
            value="Next"
          /> */}
                  {/* <Modal /> */}

        {/* </div> */}
        </div>

      </div>
      {/* {console.log('valuessssss', values)} */}
      <div className="Side2">
        <div className="Side2Wrapper">
          <div className="Avatar"></div>
          <a href={values[1]} target="_blank">Email address hidden</a>
          <br/>
          <br/>
          <h1>...</h1>
        </div>
        {/* <br/> */}
       <Images />
      </div>
    </div>
  );
}

export default Contents;

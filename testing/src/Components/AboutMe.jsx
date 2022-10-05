import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Modal2 from "../Components/Modal2";
import Whoareyou from "../Asserts/WhoAreYou.png";
import Pelo from "../Applications/Pelo.jpg";
import Puse from "../Applications/Puse.jpg";


function AboutMe(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <h1 color="danger" onClick={toggle} className="modalButton">
        About me
      </h1>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        {/* <ModalHeader toggle={toggle}>Who are you?</ModalHeader> */}
        <ModalBody>
          <h1>Quick Introduction:</h1>
          <br />
          <div className="WhoAreYouContainer">
            <div>
              <img src={Whoareyou} alt="" />
            </div>
            <div>
              <h2>Who are you?</h2>
              <p>
                Hi. I'm Ramollo Samuel Tumisang(known as Tumisang/Tumi) and I'm
                a Junior Software Developer. Since childhood, I have been
                passionate about personal computers and media designs. I
                completed my Matric in 2009 and went to DSDC college the
                following year for a matric upgrade, hoping to enroll with Unisa
                and study Multimedia Designs, but I could not further my education
                because I couldn't afford to pay for the studies. I
                worked as a security guard/officer for 8 years before I was
                introduced to The Coding Ground Academy in 2020.
              </p>
<div>
              <p>
                I'm a father of two beautiful daughters(Boipelo-10 and
                Puseletso-4)
              </p>
              <div>                
                <img src={Pelo} alt="" />
                <img src={Puse} alt="" />

              </div>

</div>
<br/>
<br/>
              <h2>Where you from</h2>

              <p>
                I was born in the province of North West and raised by my
                grandparents in a small village called Madidi. After I completed
                my matric, I moved to Gauteng province and live with my mother,
                seeking a better future. So I'm still living with my mom and my two siblings at Olievenhoutbosch. 
              </p>
              <br />

              <h2>Weaknesses</h2>
              <p>
                I've always had trouble with public speaking. I tend to get a
                nervous when delivering presentations at large meetings. I'm
                fine when I'm speaking in smaller groups of five or less, but
                any more than that and I start getting flustered.
              </p>
            </div>
          </div>
          {/* <p>
             I joined THE CODING GROUND
            acardemy because ... In the months I have spent there, I have
            learned Javascript programming language and React framework. I am so
            glad I am getting the chance to fulfil my dream of becoming a
            software developer.
          </p> */}
        </ModalBody>
        {/* </div> */}
        <ModalFooter>
          <Modal2 />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AboutMe;

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Modal2 from "../Components/Modal2";

function ModalFullscreenExample(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <p color="danger" onClick={toggle} className="modalButton">
        Step 1: Who are you?
      </p>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>
          Who are you & where do you come from?
        </ModalHeader>
        <ModalBody>
          I was born in the province of North West and raised by my grandparents
          in a small village called Madidi. Since childhood, I have been
          passionate about personal computers and multimedia designs. I
          completed my Matric in 2009 and went to DSDC college the following
          year for a matric upgrade, hoping to enroll with Unisa and study
          Multimedia Designs, but I could not study multimedia designs because I
          couldn't afford to pay for the studies In 2016 I was awarded the
          commendation of service excellence at Imvula Quality Protection for
          saving one of my colleague’s life. I joined THE CODING GROUND because
          I love coding I wanted to become the best software developers in the
          world. Currently, I’m doing frontend development. In the months that I
          have spent here so far, I’ve been able to learn a few programming
          languages and frameworks. I am just so glad that I am getting the
          chance to fulfil my dream of becoming a software developer.
          <br />
          <br/>
          <p>Weaknesses</p>
          <p>
            I’m an introvert, which means that I may be a bit more reserved when
            I start in a new position. I may not contribute as much in team
            meetings at first as I tend to sit back and listen until I’m
            comfortable with the team{" "}
          </p>
          <p>
            I've always had trouble with public speaking. I tend to get a little
            nervous when delivering presentations at large meetings. I'm fine
            when I'm speaking in smaller groups of five or less, but any more
            than that and I start getting flustered.
          </p>
        </ModalBody>
        <ModalFooter>
<Modal2 />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample;

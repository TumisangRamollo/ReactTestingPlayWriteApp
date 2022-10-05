import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Modal5 from "../Components/Modal5";
// import KnowItAll from '../Asserts/Knowitall.jpeg'
import KnowItAll from "../Asserts/Khowitall2.webp";

import NosePicking from "../Asserts/NosePicking.jpg";
import DirtyDishes from "../Asserts/DirtyDishes.jpg";
import Sneezing from "../Asserts/Sneezing.jpg";
import NoOffense from "../Asserts/NoOffense.webp";

function ModalFullscreenExample4(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <h1 color="danger" onClick={toggle} className="modalButton">
        What pet peeves do you have?
      </h1>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <div className="petPeevesDevider">
            <h5>Know-it-alls.</h5>
            <img className="petPeeves" src={KnowItAll} alt="" />
            <p>No one likes a know-it-all. Period.</p>
          </div>
          <hr />
          <div className="petPeevesDevider">
            <h5>Nose picking.</h5>
            <img className="petPeeves" src={NosePicking} alt="" />
            <p>
              Just... ew. picking your nose isn't socially acceptable and can
              cause bacteria to spread.
            </p>
          </div>
          <hr />
          <div className="petPeevesDevider">
            <h5>Leaving dishes in the sink. </h5>
            <img className="petPeeves" src={DirtyDishes} alt="" />

            <p>
              For some people, the mere idea of waking up with dirty dishes in
              the sink is unbelievable. The truth is that is really does feel
              good to wake up to a clean kitchen, though.
            </p>
          </div>
          <hr />
          <div className="petPeevesDevider">
            <h5>Sneezing without covering your mouth.</h5>
            <img className="petPeeves" src={Sneezing} alt="" />

            <p>
              Covering sneezes and keeping hands clean can help
              prevent the spread of serious respiratory illnesses like
              influenza and
              COVID-19. Germs can be easily spread by: sneezing.
            </p>
          </div>
          <hr />
          <div className="petPeevesDevider">
            <h5>People who say "No offense"</h5>
            <img className="petPeeves" src={NoOffense} alt="" />

            <p>
              {/* Nobody says this unless they just said something offensive and
              they want to backtrack so that it doesn't seem so intentional. */}
              To me, No offense means, I'm about hurt your feelings, but lets
              pretend I didn't. So when someone says "No offense", I
              automatically start to get offended.
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Modal5 />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample4;

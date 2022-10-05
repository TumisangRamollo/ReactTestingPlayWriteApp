import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Modal2 from "../Components/Modal2";
import Modal4 from "../Components/Modal4";
import Games from "../Asserts/18.jpg";
import Fifa from "../Asserts/Fifa.webp";
import Spiderman from "../Asserts/Spiderman.jpeg";
import Mortal from "../Asserts/MortalCombat.jpg";
import Music from "../Asserts/Music.png";
import Movies from "../Asserts/Movies.png";
import Butweiser2 from "../Asserts/Butweiser2.png";

function ModalFullscreenExample3(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <h1 color="danger" onClick={toggle} className="modalButton">
        What do you do for fun?
      </h1>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>What do you do for fun?</ModalHeader>
        <ModalBody>
          <div className="gamesImageContainer">
            <div>
              <img className="gamesImageMain" src={Games} alt="" />
              <br />
              <hr />
              <br />
              <div className="gamesDiv">
                <img className="gamesImage" src={Fifa} alt="" />
                <img className="gamesImage" src={Spiderman} alt="" />
                <img className="gamesImage" src={Mortal} alt="" />
              </div>
              <div className="gamesDi">
                <img className="gamesImageMovies" src={Music} alt="" />
              </div>
              <div className="gamesDi">
                <img className="gamesImageMovies" src={Movies} alt="" />
              </div>
              <div className="gamesDi">
                <img className="gamesImageMovies" src={Butweiser2} alt="" />
              </div>
            </div>
            <div></div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Modal4 />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample3;

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Modal2 from "../Components/Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Modal5 from "./Modal5";
import Modal6 from "./Modal6";
import Agenda from '../Asserts/agenda2.png'

import AboutMe from "./AboutMe";

function ModalFullscreenExample(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <p color="danger" onClick={toggle} className="modalButton">
        Agenda
      </p>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <div style={{display:"grid" , gridTemplateColumns:"75% 25%"}}>
            <div>
              <img src={Agenda} alt="" />
            </div>
            <div style={{padding:"5rem"}}>
              <AboutMe />
              <hr/>
              <Modal2 />
              <hr/>

              <Modal3 />
              <hr/>

              <Modal4 />
              <hr/>

              <Modal5 />
              <hr/>

              <Modal6 />
            </div>
          </div>
        </ModalBody>
        {/* </div> */}
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample;

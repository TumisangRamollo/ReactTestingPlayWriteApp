import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody , ModalFooter} from "reactstrap";
import Modal7 from './Modal7'
import Hobby from "../Asserts/hobbies.jpg";

function ModalFullscreenExample6(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="WhoAreYouContainer">
      <h1 color="danger" onClick={toggle} className="modalButton">
        Hobbies & Interests
      </h1>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <h3>Hobbies</h3>
          <div>
            {/* <div>
            <img src={Hobby} alt="" />
          </div> */}
            <p>Listening to music</p>
            <p>Creating music ()</p>
            <p>Creating video (OpenShot)</p>
            <p>Reading (News papers):</p>
            <div></div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Modal7 />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample6;

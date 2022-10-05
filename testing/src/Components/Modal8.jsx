import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Question from "../Asserts/Question2.jpg";

function ModalFullscreenExample8(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="WhoAreYouContainer">
      <h1 color="danger" onClick={toggle} className="modalButton">
        Questions
      </h1>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <img src={Question} alt="" />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample8;

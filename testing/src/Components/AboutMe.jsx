import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Modal2 from "../Components/Modal2";

function AboutMe(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle} className="modalButton">
        Step 1: Who are you?
      </Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>
            M
        </ModalHeader>
        <ModalBody>
         <h1>....</h1>
         <br/>
         <p></p>
        </ModalBody>
        <ModalFooter>
<Modal2 />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AboutMe;

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Modal5 from "../Components/Modal5"

function ModalFullscreenExample4(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <p color="danger" onClick={toggle} className="modalButton">
        Step 4: What pet peeves do you have?
      </p>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>
        What pet peeves do you have?
        </ModalHeader>
        <ModalBody>
        <p> hfksdfhfksdhfljhfpudflhasdjkfhkjhfaksdfjk
          </p>
        </ModalBody>
        <ModalFooter>
<Modal5 />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample4;

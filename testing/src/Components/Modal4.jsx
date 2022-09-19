import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Modal5 from "./Modal5"

function ModalFullscreenExample4(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Step 4: What pet peeves do you have?
      </Button>
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

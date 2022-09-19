import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Modal2 from "./Modal2"
import Modal4 from "./Modal4"


function ModalFullscreenExample3(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Step 3: What do you do for fun?
      </Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>
        What do you do for fun?
        </ModalHeader>
        <ModalBody>
        <p> hfksdfhfksdhfljhfpudflhasdjkfhkjhfaksdfjk
          </p>
        </ModalBody>
        <ModalFooter>
<Modal2 />
<Modal4 />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample3;

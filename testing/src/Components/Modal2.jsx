import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Modals from "./Modal";
import Modal3 from "./Modal3"

function ModalFullscreenExample2(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Step 2: Who are you?
      </Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>
        Tell us something about you What do you think you're really
          good at?
        </ModalHeader>
        <ModalBody>
        <p> cvxcvxcvxcvxccvxcvxcvxcvxc
          </p>
        </ModalBody>
        <ModalFooter>
<Modals />
<Modal3 />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample2;

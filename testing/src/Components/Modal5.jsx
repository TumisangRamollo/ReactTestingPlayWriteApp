import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalFullscreenExample5(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Step 5: What pet peeves do you have?
      </Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>What pet peeves do you have?</ModalHeader>
        <ModalBody>
          <p>
            1. Spitting:{" "}
            <span>
              Spitting on the sidewalk, on the ground or out the car window to
              be "cool"... It's just never cute.
            </span>
          </p>
          <p>
            2. Tapping:
            <span>
              The sound of tapping fingers or a tapping pen can be so
              distracting. Especially in a classroom or at work.
            </span>
          </p>

          <p>
            3. Pet hair:{" "}
            <span>Pet hair all over clothes, floor or furniture</span>
          </p>

          <p>People who can't apologize</p>

          <p> Worse, someone who expects you to pay</p>
        </ModalBody>

      </Modal>
    </div>
  );
}

export default ModalFullscreenExample5;

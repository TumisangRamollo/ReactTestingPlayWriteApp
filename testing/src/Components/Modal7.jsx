import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody , ModalFooter} from "reactstrap";
import Modal8 from './Modal8'
import TheEnd from '../Asserts/The_end.jpg'

function ModalFullscreenExample7(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="WhoAreYouContainer">
      <h1 color="danger" onClick={toggle} className="modalButton">
        The end
      </h1>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
<img src={TheEnd} alt=""/>
        </ModalBody>
        <ModalFooter>
          <Modal8 />
        </ModalFooter>
      </Modal>
      
    </div>
  );
}

export default ModalFullscreenExample7;
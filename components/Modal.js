import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const ModalReact = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <a className="close" onClick={toggle}>
      &times;
    </a>
  );

  return (
    <>
      <Button color="primary" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Добавить новый проект
        </ModalHeader>
        <ModalBody>{props.children}</ModalBody>
      </Modal>
    </>
  );
};

export default ModalReact;

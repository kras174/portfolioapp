import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const ModalReact = (props) => {
  const { isOpen, toggle, buttonLabel, className } = props;

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
      <Modal isOpen={isOpen} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Добавить новый проект
        </ModalHeader>
        <ModalBody>{props.children}</ModalBody>
      </Modal>
    </>
  );
};

export default ModalReact;

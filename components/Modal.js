import { getServerSideProps } from "../pages/works/[id]";

const Modal = (props) => {
  let closeButton = null;
  const toggleModal = () => {
    closeButton.click();
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Добавить проект
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Добавить новый проект
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              <button
                ref={(ele) => {
                  closeButton = ele;
                }}
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Закрыть
              </button>
              <button
                onClick={toggleModal}
                type="button"
                className="btn btn-primary"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

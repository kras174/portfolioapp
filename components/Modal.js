import { getServerSideProps } from "../pages/works/[id]";
import { render } from "react-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.closeButton = null;
  }

  closeModal() {
    this.closeButton.click();
  }

  toggleModal = () => {
    this.closeModal();
  };

  //TODO: Отклчать кнопку "Создать". пока все поля формы не будут заполнены

  render() {
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
              <div className="modal-body">{this.props.children}</div>
              <div className="modal-footer">
                <button
                  ref={(ele) => {
                    this.closeButton = ele;
                  }}
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Закрыть
                </button>
                <button
                  onClick={this.toggleModal}
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
  }
}

export default Modal;

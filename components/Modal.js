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

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-primary btn-sm"
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
                  ref={(ele) => {
                    this.closeButton = ele;
                  }}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

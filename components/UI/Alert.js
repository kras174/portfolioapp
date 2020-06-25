import { useContext } from "react";
import AlertContext from "../../context/AlertContext";

const Alert = () => {
  const { hideAlert, alert } = useContext(AlertContext);

  return (
    <div className="alert-container">
      <div
        className={`alert alert-${alert.type || "warning"} alert-dismissible`}
      >
        <button
          onClick={hideAlert}
          type="button"
          className="close"
          data-dismiss="alert"
        >
          &times;
        </button>
        <h4 className="alert-heading text-center">{alert.text}</h4>
      </div>
      <style jsx>
        {`
          .alert-container {
            position: absolute;
            top: 55px;
            width: 50vw;
            opacity: 0;
            animation: alert 300ms ease-in forwards;
            z-index: 10;
          }
          .alert-show {
          }
          .alert-hide {
          }
          @keyframes alert {
            0% {
              top: 20px;
            }
            60% {
              opacity: 0.7;
              top: 65px;
            }
            100% {
              opacity: 1;
              top: 55px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Alert;

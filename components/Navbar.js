import Link from "next/link";
import { useContext } from "react";
import AlertContext from "../context/AlertContext";
import Alert from "../components/Alert";

const Navbar = () => {
  const { alert } = useContext(AlertContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand" href="#">
              Портфолио
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link">
                    Главная
                    <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">Обо мне</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services">
                  <a className="nav-link">Услуги</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contacts">
                  <a className="nav-link">Контакты</a>
                </Link>
              </li>
            </ul>
          </div>
          {alert.visible && <Alert />}
        </div>
      </nav>
      <style jsx>
        {`
          .navbar .container {
            position: relative;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;

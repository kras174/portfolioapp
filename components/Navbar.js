import Link from "next/link";

const Navbar = () => (
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
    </div>
  </nav>
);

export default Navbar;

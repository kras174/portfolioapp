import React, { useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import AlertContext from "../context/AlertContext";
import Alert from "../components/Alert";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";

import auth0 from "../services/auth0";

const MyNavLink = (props) => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="header-default-link nav-link">{title}</a>
    </Link>
  );
};

const Login = () => {
  return (
    <span onClick={auth0.login} className="nav-link clickable">
      Войти
    </span>
  );
};

const Logout = () => {
  return (
    <span onClick={auth0.logout} className="nav-link clickable">
      Выйти
    </span>
  );
};

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { alert } = useContext(AlertContext);

  const toggle = () => setIsOpen(!isOpen);
  const { isAuthenticated, user } = props.auth;
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">Студия WEB-разработки</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <MyNavLink route="/" title="Главная" />
            </NavItem>
            <NavItem>
              <MyNavLink route="/portfolio" title="Портфолио" />
            </NavItem>
            <NavItem>
              <MyNavLink route="/about" title="О нас" />
            </NavItem>
            <NavItem>
              <MyNavLink route="/services" title="Услуги" />
            </NavItem>
            <NavItem>
              <MyNavLink route="/contacts" title="Контакты" />
            </NavItem>
            {!isAuthenticated && (
              <NavItem>
                <Login />
              </NavItem>
            )}
            {isAuthenticated && (
              <>
                <img className="avatar" src={user.picture} />
                <NavItem>
                  <Logout />
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
        {alert.visible && <Alert />}
      </Container>
    </Navbar>
  );
};

export default Header;

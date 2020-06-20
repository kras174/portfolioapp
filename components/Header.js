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

const MyNavLink = (props) => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="header-default-link nav-link">{title}</a>
    </Link>
  );
};

const Login = () => {
  return <span className="nav-link clickable">Войти</span>;
};

const Logout = () => {
  return <span className="nav-link clickable">Выйти</span>;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { alert } = useContext(AlertContext);

  const toggle = () => setIsOpen(!isOpen);

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
            <NavItem>
              <Login />
            </NavItem>
            <NavItem>
              <Logout />
            </NavItem>
          </Nav>
        </Collapse>
        {alert.visible && <Alert />}
      </Container>
    </Navbar>
  );
};

export default Header;

import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AlertContext from "../../context/AlertContext";
import Alert from "../UI/Alert";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import auth0 from "../../services/auth0";

const MyNavLink = (props) => {
  const { route, title, activeClassName } = props;
  let className = "header-default-link nav-link";
  const router = useRouter();
  if (router.pathname === route) {
    className = `${className} ${activeClassName}`;
  }
  return (
    <Link href={route}>
      <a className={className}>{title}</a>
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
    <Navbar color="light" light expand="md" className="px-md-5">
      <NavbarBrand href="/">WEB-developer</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <MyNavLink activeClassName="activeLink" route="/" title="Главная" />
          </NavItem>
          <NavItem>
            <MyNavLink
              activeClassName="activeLink"
              route="/portfolio"
              title="Портфолио"
            />
          </NavItem>
          <NavItem>
            <MyNavLink
              activeClassName="activeLink"
              route="/about"
              title="Обо мне"
            />
          </NavItem>
          {/* <NavItem>
            <MyNavLink
              activeClassName="activeLink"
              route="/services"
              title="Услуги"
            />
          </NavItem>
          <NavItem>
            <MyNavLink
              activeClassName="activeLink"
              route="/contacts"
              title="Контакты"
            />
          </NavItem> */}
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
    </Navbar>
  );
};

export default Header;

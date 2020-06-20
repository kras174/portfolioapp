import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AlertContext from "../context/AlertContext";

import { useState, Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

import auth0 from "../services/auth0";

function PortfolioApp({ Component, pageProps, auth }) {
  const [alert, setAlert] = useState({
    text: "Проект добавлен!",
    type: "success",
    visible: false,
  });

  const showAlert = (text, type) =>
    setAlert({
      text: text,
      type: type,
      visible: true,
    });

  const hideAlert = () =>
    setAlert({
      text: "",
      type: "",
      visible: false,
    });
  return (
    <div className="main">
      <Head>
        <title>Студия WEB-разработки</title>
      </Head>
      <AlertContext.Provider value={{ showAlert, hideAlert, alert }}>
        <Header auth={auth} />
        <div className="page-container container">
          <Component {...pageProps} auth={auth} />
        </div>
      </AlertContext.Provider>
      <Footer />
    </div>
  );
}

PortfolioApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const user = process.browser
    ? await auth0.clientAuth()
    : await auth0.serverAuth(ctx.req);

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const auth = { user, isAuthenticated: !!user };

  return { pageProps, auth };
};

export default PortfolioApp;

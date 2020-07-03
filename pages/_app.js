import Head from "next/head";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import AlertContext from "../context/AlertContext";

import { useState, Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

import auth0 from "../services/auth0";

// const getUser = async () => {
// return process.browser
//   ? await auth0.clientAuth()
//   : await auth0.serverAuth(ctx.req);
//   return await auth0.clientAuth();
// };

function PortfolioApp({ Component, pageProps, auth }) {
  // const user = getUser();

  // const isSiteOwner =
  //   user && user[`${process.env.NAMESPACE}/role`] === "siteOwner";

  // const auth = { user, isAuthenticated: !!user, isSiteOwner };

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
        <title>Антон Красильников - WEB-разработчик</title>
        <meta
          name="description"
          content="Привет, меня зовут Антон Красильников и я WEB-разработчик"
        />
        <meta
          name="keywords"
          content="веб-разработка, портфолио, создание сайтов, разработка сайтов"
        />
        <meta
          property="og:title"
          content="Антон Красильников - программист, разработчик, путешественник"
        />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:utl" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Привет, меня зовут Антон Красильников и я WEB-разработчик"
        />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </Head>
      <AlertContext.Provider value={{ showAlert, hideAlert, alert }}>
        <Header auth={auth} />
        <div className="page-container">
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

  const isSiteOwner =
    user && user[`${process.env.NAMESPACE}/role`] === "siteOwner";

  const auth = { user, isAuthenticated: !!user, isSiteOwner };

  return { pageProps, auth };
};

export default PortfolioApp;

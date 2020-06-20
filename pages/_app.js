import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AlertContext from "../context/AlertContext";

import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

function PortfolioApp({ Component, pageProps }) {
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
        <Header />
        <div className="page-container container">
          <Component {...pageProps} />
        </div>
      </AlertContext.Provider>
      <Footer />
    </div>
  );
}

export default PortfolioApp;

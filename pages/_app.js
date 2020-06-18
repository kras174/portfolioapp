import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MoneyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Портфолио</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        ></link>
        {/* <link
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/superhero/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rvwYMW9Z/bbxZfgxHQEKx6D91KwffWAG+XnsoYNCGWi/qL1P9dIVYm1HBiHFqQEt"
          crossorigin="anonymous"
        ></link> */}
        <link
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/sketchy/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-NkI/Nlr1DZ5rUXWWdnuZb97FQRgCCcwC66DC+HUCY0oVx6BgBHUfPcwL1vwp93JZ"
          crossorigin="anonymous"
        ></link>
        {/* <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        /> */}
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <Navbar />
      <div className="page-container container">
        <Component {...pageProps} />
      </div>
      <Footer />

      <style jsx>
        {`
          font-family: "Roboto", sans-serif;
          .page-container {
            padding-top: 80px;
          }
        `}
      </style>
    </div>
  );
}

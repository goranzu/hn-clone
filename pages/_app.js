import React from "react";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

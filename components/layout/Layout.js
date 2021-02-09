import Head from "next/head";
import PropTypes from "prop-types";
import Header from "../header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Hacker News Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

import Head from "next/head";
import PropTypes from "prop-types";
import Articles from "../articles/Articles";
import Container from "../container/Container";
import MoreLink from "../moreLink/MoreLink";

export default function Page({ data, pageName, page }) {
  if (data == null) {
    return (
      <Container style={{ marginTop: "2em" }}>
        <p>Something went wrong... Please try again later.</p>
      </Container>
    );
  }

  return (
    <Container>
      <Head>
        <title>Hacker News Clone | {pageName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Articles page={page} articles={data} />
      <MoreLink page={page + 1} />
    </Container>
  );
}

Page.propTypes = {
  data: PropTypes.array.isRequired,
  pageName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

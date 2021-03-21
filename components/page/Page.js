import Head from "next/head";
import PropTypes from "prop-types";
import Articles from "../articles/Articles";
import Container from "../container/Container";
import MoreLink from "../moreLink/MoreLink";

const maxPages = {
  top: 10,
  new: 10,
  show: 2,
  ask: 2,
  jobs: 1,
};

export default function Page({ data, pageName, page }) {
  if (data == null) {
    return (
      <Container>
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
      {page < maxPages[pageName.toLowerCase()] && <MoreLink page={page + 1} />}
    </Container>
  );
}

Page.propTypes = {
  data: PropTypes.array.isRequired,
  pageName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

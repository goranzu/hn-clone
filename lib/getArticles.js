import axios from "axios";

export default async function getArticles({ resource, page }) {
  const { data } = await axios.get(
    `https://api.hnpwa.com/v0/${resource}/${page}.json`,
  );
  return data;
}

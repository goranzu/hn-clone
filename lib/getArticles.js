import axios from "axios";

// async function getPosts(page) {
//   const { data } = await axios.get(
//     `https://api.hnpwa.com/v0/news/${page}.json`,
//   );
//   return data;
// }

export default async function getArticles({ resource, page }) {
  const { data } = await axios.get(
    `https://api.hnpwa.com/v0/${resource}/${page}.json`,
  );
  return data;
}

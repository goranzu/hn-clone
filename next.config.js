// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/top/1",
        permanent: true,
      },
    ];
  },
};

const nextTranslate = require("next-translate");

module.exports = {
  ...nextTranslate(),
  images: {
    domains: ["housinghome.net", "www.housinghome.net", "jquery.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/th",
        permanent: true,
      },
    ];
  },
};

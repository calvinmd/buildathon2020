module.exports = {
  // Config
  ADDRESS: process.env.ADDRESS || "0.0.0.0",
  PORT: process.env.PORT || 8080,

  // Charity Navigator
  CN_APP_ID: process.env.CN_APP_ID,
  CN_KEY: process.env.CN_KEY,
  CN_ENDPOINT: "https://api.data.charitynavigator.org/v2/"
};

module.exports = [
  {
    // charity details
    url: "/charity/:ein",
    method: "GET",
    handler: "charityDetails"
  },
  {
    // charities by zipcode
    url: "/charities/:zipCode",
    method: "GET",
    handler: "charitiesByZipcode"
  },
  {
    url: "/",
    method: "GET",
    handler: async (req, res) => {
      return { hello: "world " };
    }
  }
];

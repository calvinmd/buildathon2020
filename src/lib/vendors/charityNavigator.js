const got = require("got");
const queryString = require("query-string");
const { get } = require("lodash");

const { CN_APP_ID, CN_KEY, CN_ENDPOINT } = require("../../config/constants");

module.exports = {
  getByZipCode: async ({ zipCode }) => {
    const params = {
      app_id: CN_APP_ID,
      app_key: CN_KEY,
      zip: zipCode
    };
    const endpoint = `${CN_ENDPOINT}Organizations`;
    const url = `${endpoint}?${queryString.stringify(params)}`;
    let response;
    try {
      response = await got.get(url);
    } catch (error) {
      console.error(error);
      error.message = "getByZipCode failed.";
      return { error };
    }

    return { value: get(response, "body") };
  },
  getDetails: async ({ ein }) => {
    const params = {
      app_id: CN_APP_ID,
      app_key: CN_KEY
    };

    const endpoint = `${CN_ENDPOINT}Organizations/${ein}`;
    const url = `${endpoint}?${queryString.stringify(params)}`;
    let response;
    try {
      response = await got.get(url);
    } catch (error) {
      console.error(error);
      error.message = "getDetails failed.";
      return { error };
    }

    return { value: get(response, "body") };
  }
};

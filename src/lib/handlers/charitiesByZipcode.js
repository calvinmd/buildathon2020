const { getByZipCode } = require("../vendors/charityNavigator");

module.exports = async (req, res) => {
  const { zipCode } = req.params;
  console.log("zzz zipCode: ", zipCode);
  if (!zipCode) {
    return new Error("Zipcode is required");
  }

  const { error, value } = await getByZipCode({ zipCode });
  console.log("zzz value: ", value.length);
  console.log("zzz error: ", error);

  if (error) {
    return error;
  }

  return value;
};

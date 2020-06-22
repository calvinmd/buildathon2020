const { getDetails } = require("../vendors/charityNavigator");

module.exports = async (req, res) => {
  const { ein } = req.params;
  console.log("zzz params: ", req.params);
  console.log("zzz ein: ", ein);
  if (!ein) {
    return new Error("EIN is required");
  }

  const { error, value } = await getDetails({ ein });
  console.log("zzz value: ", value);
  console.log("zzz error: ", error);

  if (error) {
    return error;
  }

  return value;
};

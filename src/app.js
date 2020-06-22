const { build } = require("./build");

function init(serverFactory) {
  const app = build({ serverFactory, logger: true });
  return app;
}

if (require.main !== module) {
  // called directly i.e. "node app"
  init().listen(3000, err => {
    if (err) console.error(err);
    console.log("server listening on 3000");
  });
} else {
  // required as a module => executed on aws lambda
  module.exports = init;
}

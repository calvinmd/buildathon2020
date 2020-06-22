const awsServerlessExpress = require("aws-serverless-express");
const init = require("./app");

let server;
const serverFactory = handler => {
  server = awsServerlessExpress.createServer(handler);
  return server;
};
const app = init(serverFactory);

exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  app.ready(e => {
    if (e) return console.error(e.stack || e);
    awsServerlessExpress.proxy(server, event, context, "CALLBACK", callback);
  });
};

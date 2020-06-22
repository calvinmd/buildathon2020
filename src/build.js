/* eslint strict:"off" */
"use strict";

const fastify = require("fastify");
const routes = require("./config/routes");

function build(opts) {
  const app = fastify(opts);

  routes.forEach(route => {
    // support for both inline function and individual handlers
    if (typeof route.handler === "string") {
      route.handler = require(`./lib/handlers/${route.handler}`);
    }
    app.route(route);
  });

  return app;
}

module.exports = {
  build
};

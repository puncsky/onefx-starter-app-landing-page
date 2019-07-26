const { config } = require("dotenv");
config();

module.exports = {
  project: "web-onefx-boilerplate",
  server: {
    port: process.env.PORT || 5001,
    staticDir: "./dist",
    delayInitMiddleware: false,
    cookie: {
      secrets: ["insecure plain text", "insecure secret here"]
    },
    noSecurityHeadersRoutes: {
      "/api-gateway/": true,
      "/api/": true
    },
    noCsrfRoutes: {
      "/api-gateway/": true,
      "/api/": true
    }
  },
  ssm: {
    enabled: false
  },
  gateways: {
    logger: {
      enabled: true,
      level: "debug"
    }
  },
  analytics: {
    googleTid: "TODO: replace with your googleTid"
  },
  csp: {
    "default-src": ["none"],
    "manifest-src": ["self"],
    "style-src": [
      "self",
      "unsafe-inline",
      "https://fonts.googleapis.com/css",
      "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/"
    ],
    "frame-src": [],
    "connect-src": ["self"],
    "child-src": ["self"],
    "font-src": [
      "self",
      "data:",
      "https://fonts.gstatic.com/",
      "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/fonts/"
    ],
    "img-src": ["*", "data:"],
    "media-src": ["self"],
    "object-src": ["self"],
    "script-src": ["self", "https://www.google-analytics.com/"]
  },
  apiGatewayUrl: "http://localhost:5001/api-gateway/"
};

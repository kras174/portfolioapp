const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

//MIDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: "https://dev-32t31pcc.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "Fx3opLTYO2DVoShNN6O5iHTcVbOaYhkX",
  issuer: "https://dev-32t31pcc.us.auth0.com/",
  algorithms: ["RS256"],
});

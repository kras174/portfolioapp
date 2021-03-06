const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const config = require("../config");

const NAMESPACE = config.NAMESPACE;

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

exports.checkRole = function (role) {
  return function (req, res, next) {
    const user = req.user;
    if (
      user &&
      user[NAMESPACE + "/role"] &&
      user[NAMESPACE + "/role"] === role
    ) {
      next();
    } else {
      return res.status(401).send({
        title: "Not Authorized",
        message: "Please be owner to authorized this data",
      });
    }
  };
};

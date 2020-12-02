const prod = process.env.NODE_ENV.trim() === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://portfoliokras.herokuapp.com"
    : "http://localhost:3000",
  "process.env.NAMESPACE": prod
    ? "https://portfoliokras.herokuapp.com"
    : "http://localhost:3000",
  "process.env.CLIENT_ID": "Fx3opLTYO2DVoShNN6O5iHTcVbOaYhkX",
};

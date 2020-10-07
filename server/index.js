const next = require("next");
const express = require("express");
const path = require("path");
const compression = require("compression");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// const authService = require("./services/auth");

const config = require("./config");

const portfolioRoutes = require("./routes/portfolio");

const robotsOptions = {
  root: path.join(__dirname, "../public"),
  headers: {
    "Content-Type": "text/plain;charset=UTF-8",
  },
};

mongoose
  .connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.error(err));

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());
    server.use(bodyParser.json());

    server.use("/api/v1/portfolio", portfolioRoutes);

    server.get("/robots.txt", (req, res) => {
      return res.status(200).sendFile("robots.txt", robotsOptions);
    });

    // server.get("/api/v1/secret", authService.checkJWT, (req, res) => {
    //   return res.json(secretData);
    // });

    // server.get(
    //   "/api/v1/owneronly",
    //   authService.checkJWT,
    //   authService.checkRole("siteOwner"),
    //   (req, res) => {
    //     return res.json(ownerData);
    //   }
    // );

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use(function (err, req, res, next) {
      if (err.name === "UnauthorizedError") {
        res
          .status(401)
          .send({ title: "Unauthorized", detail: "Unauthorized Access" });
      }
    });

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log("> Ready on port " + PORT);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

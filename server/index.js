const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const filePath = "./data.json";

const fs = require("fs");
const path = require("path");
const worksData = require(filePath);
const authService = require("./services/auth");

const config = require("./config");

const portfolioRoutes = require("./routes/portfolio");

const secretData = [
  {
    title: "Secret Data 1",
    description: "Spme secret thing",
  },
  {
    title: "Secret Data 2",
    description: "Passwords!",
  },
];
const ownerData = [
  {
    name: "owner",
    secretKey: "1111111",
  },
];

mongoose
  .connect(config.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("---------------Database connected!!"));

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());

    server.use("/api/v1/portfolios", portfolioRoutes);

    server.get("/api/v1/secret", authService.checkJWT, (req, res) => {
      return res.json(secretData);
    });

    server.get(
      "/api/v1/owneronly",
      authService.checkJWT,
      authService.checkRole("siteOwner"),
      (req, res) => {
        return res.json(ownerData);
      }
    );

    server.get("/api/v1/works", (req, res) => {
      return res.json(worksData);
    });

    server.get("/api/v1/works/:id", (req, res) => {
      const { id } = req.params;

      const work = worksData.find((w) => w.id === id);

      return res.json(work);
    });

    server.post("/api/v1/works", (req, res) => {
      const newWork = req.body;
      worksData.push(newWork);

      const pathToFile = path.join(__dirname, filePath);
      const stringifiedData = JSON.stringify(worksData, null, 2);

      fs.writeFile(pathToFile, stringifiedData, (err) => {
        if (err) {
          return res.status(422).send(err);
        }

        return res.json("Work has been succesfuly added!");
      });
    });

    server.patch("/api/v1/works/:id", (req, res) => {
      const { id } = req.params;
      const work = req.body;

      const workIndex = worksData.findIndex((w) => w.id === id);
      worksData[workIndex] = work;

      const pathToFile = path.join(__dirname, filePath);
      const stringifiedData = JSON.stringify(worksData, null, 2);

      fs.writeFile(pathToFile, stringifiedData, (err) => {
        if (err) {
          return res.status(422).send(err);
        }

        return res.json("Work has been succesfuly updated!");
      });
    });

    server.delete("/api/v1/works/:id", (req, res) => {
      const { id } = req.params;

      const workIndex = worksData.findIndex((w) => w.id === id);
      worksData.splice(workIndex, 1);

      const pathToFile = path.join(__dirname, filePath);
      const stringifiedData = JSON.stringify(worksData, null, 2);

      fs.writeFile(pathToFile, stringifiedData, (err) => {
        if (err) {
          return res.status(422).send(err);
        }

        return res.json("Work has been succesfuly deleted!");
      });
    });

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

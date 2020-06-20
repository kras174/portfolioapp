const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const filePath = "./data.json";

const fs = require("fs");
const path = require("path");
const worksData = require(filePath);

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());

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

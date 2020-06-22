const Portfolio = require("../models/portfolio");

exports.getPortfolios = function (req, res) {
  Portfolio.find({}, (err, allPortfolios) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(allPortfolios);
  });
};
exports.createPortfolio = function (req, res) {
  const portfolioData = req.body;
  const portfolio = new Portfolio(portfolioData);

  portfolio.save((err, createdPortfolio) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(createdPortfolio);
  });
};
//TODO доделать удаление и обновление портфолио
exports.updatePortfolio = function (req, res) {
  const portfolioId = req.params.id;
  const portfolioData = req.body;

  Portfolio.findById(portfolioId, (err, foundPortfolio) => {
    if (err) {
      return res.status(422).send(err);
    }

    foundPortfolio.set(portfolioData);
    foundPortfolio.save((err, updatedPortfolio) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json(updatedPortfolio);
    });
  });
};

exports.deletePortfolio = function (req, res) {
  const portfolioId = req.params.id;

  Portfolio.deleteOne({ _id: portfolioId }, (err, deletedPortfolio) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json({ status: "DELETED" });
  });
};

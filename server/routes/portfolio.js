const express = require("express");
const router = express.Router();
const authService = require("../services/auth");

const portfolioCtrl = require("../controllers/portfolio");

router.get(
  "",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  portfolioCtrl.getPortfolios
);

router.post(
  "",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  portfolioCtrl.createPortfolio
);

router.patch(
  "",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  portfolioCtrl.updatePortfolio
);

router.delete(
  "",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  portfolioCtrl.deletePortfolio
);

module.exports = router;

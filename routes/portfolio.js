const express = require("express");
const router = express.Router();

const portfolioService = require("../services/portfolio");

router.post("/portfolios", async (req, res) => {
    const content = await portfolioService.createPortfolio(req);
    res.send(content);
});


router.get('/portfolios/:username', async (req, res) => {
    const content = await portfolioService.getPortfolioDetail(req.params.username);
    res.send(content);
});

router.get('/portfolios', async (res) => {
    const content = await portfolioService.getPortfolio();
    res.send(content);
});


module.exports = router;
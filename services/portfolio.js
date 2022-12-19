const e = require('express');
const portfolioModel = require('../models/portfolio');

const respContent = (success, message, content) => {
    return { success: success, message: message, content: content };
};

exports.getPortfolioDetail = async (username) => {
    const portfolio = await portfolioModel.findOne({ username: username });
    if (portfolio) return respContent(true, 'portfolio found', portfolio);
    throw Error('Sorry, no portfolio found.');
}; 

exports.getPortfolio = async () => {
    const portfolios = await portfolioModel.find();
    if (portfolios) return respContent(true, " found", portfolios);
    throw new Error("No found");
} 

 
exports.createPortfolio = async (req) => {
    const portfolio = {
        username : req.body.username,
        password : req.body.password,
        header : req.body.header,
        experience : req.body.experience,
        projects : req.body.projects
    }

    const content = await portfolioModel.create(portfolio);

    return respContent(true, 'Portfolio created', portfolio._id);
};


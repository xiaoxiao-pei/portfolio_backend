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
        header : req.body.header,
        experience : req.body.experience,
        projects : req.body.projects
    }

    const content = await portfolioModel.create(portfolio);

    return respContent(true, 'Portfolio created', portfolio._id);
};

var nodemailer = require("nodemailer");
exports.sendEmail = async (req) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const emailContent = "From: " + name + "\n" + "Email: " + email +  "\n" +  "Message: " + "\n" + message;

    console.log(emailContent);

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: 'OAuth2',
            user: 'reacter2022@gmail.com',
            pass: 'FSDreacter2022',
            clientId: '580473509575-vi0vuemiqbmhfiv1clgv1hsaerjra3ak.apps.googleusercontent.com',
            clientSecret: "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",
            refreshToken: "1//04y4Ypi64vKaZCgYIARAAGAQSNwF-L9Irq3kgbSzuYqX4Yi6_v3LGkjGfn8ynyzN8bwKqA7oB5Ki1q5m0dFUF5uwiSSeE6G_mhMM"
        },
    });

    var mailOptions = {
        from: "reacter2022@gmail.com",
        to: "pxtoday@hotmail.com",
        subject: "Contect me message",
        text: emailContent,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully ");
            return respContent(true, 'Email sent success', portfolio._id);
        }
    });
}


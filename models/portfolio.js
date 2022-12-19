const mongoose = require('mongoose');

const headerSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

})

//-----------experience schema start --------------------//
const skillSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
})

const experienceSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
    },
    css: {
        type: String,
        required: true,
    }, 
    skills: [skillSchema],
})
//-----------experience schema ends --------------------//



//-----------education schema starts --------------------//
const educationSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    school: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    gpa:{
        type: Number,
        required: true,
    },
    courses:[String]
    
})
//-----------education schema ends --------------------//



//-----------project schema start --------------------//
const projectSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    demo: {
        type: String,
        required: true,
    },

});
//-----------project schema ends --------------------//


const PortfolioSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    header:[headerSchema],

    experience: [experienceSchema],

    education: [educationSchema],

    projects: [projectSchema],

});

// Mongoose will assume there is a collection called the plural of this name (i.e., 'users' in this case).
const Portfolio = mongoose.model('Portfolio', PortfolioSchema);
module.exports = Portfolio;
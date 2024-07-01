const Housing = require("../models/home.model");

const welcomeHome = (req, res) => {res.send("in Home");}

const getHomes = async (req, res) => { 
    try {
        const homes = await Housing.find().select('-__v');
        res.status(200).json(homes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching homes' });
    }
}

const getHomeById = async (req, res) => {
    try {
        const home = await Housing.findOne({_id: req.params.id}).select('-__v');
        res.status(200).json(home);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching homes' });
    }
}

module.exports = {
    welcomeHome,
    getHomes,
    getHomeById
}
const Application = require("../models/application.model");

const apply = async (req, res) => {
  try {
    // const { id } = req.body;
    // await Application.create(req.body);
    // res.status(200).json({message: "Applied Succesfully!"});
    console.log(req.body)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while applying!" });
  }
};

module.exports = {
    apply
}
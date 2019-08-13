
const { User } = require('../db/sequelize')

// create some helper functions to work on the database
exports.createUser =  async (req,res) => {
    var usuario = new User(req.body);
    return await usuario.save().then(()=> res.json({message: 'exito'}) ).catch(next);
};
  
exports.getAllUsers = async (req,res) => {
    return await User.findAll().then((articles) => res.json({ articles: articles }))
};
  
exports.getUser = async obj => {
    return await User.findOne({
      where: obj,
    });
};
  
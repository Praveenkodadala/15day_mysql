const Sequelize = require("sequelize");


const Tag = require('../models').Tag;



module.exports = {
  create(req, res) {
    return Tag
      .create({
        title:req.body.title, 
        commentId:req.params.commentId
        

      })
      .then((tag) => res.status(201).send(tag))
      .catch((error) => res.status(400).send(error));
  },



  list(req, res) {
    return Tag
      .findAll()
      .then(tags => {
        res.status(200).send(tags)
    
      })

      .catch((error) => res.status(400).send(error));
  },




}
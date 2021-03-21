const Sequelize = require("sequelize");
const Comment = require('../models').Comment;


module.exports = {
  create(req, res) {
    return Comment
      .create({
        text : req.body.text,
        
      })
      .then((comment) => res.status(201).send(comment))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Comment
      .findAll()
      .then(comments => {
        res.status(200).send(comments)
        
      })

      .catch((error) => res.status(400).send(error));
  },
}
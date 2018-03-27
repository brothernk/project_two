const db = require("../models");

module.exports = function(app) {

  //GET Routing for all categories and return them to browser with res.json
  app.get("/api/categories", function(req, res) {
    db.Category.findAll({}).then(function(dbCategory) {
      res.json(dbCategory);
      // console.log(dbCategory);
    });
  });

  //GET Routing for category id's
  app.get("/api/categories/:id", function(request, response) {
    db.Category.findOne({
      where: {
        id: req.params.id
      }
      }).then(function(dbCategory) {
        response.json(dbCategory);
    });
  });

  //POST Routing - not sure if we will be using this feature
  app.post("/api/categories", function(req, res) {
    db.Category.create(req.body).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });
};
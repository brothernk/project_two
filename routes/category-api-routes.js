const db = require("../models");

module.exports = function(app) {

  //GET Routing for categories
  app.get("/api/categories", function(req, res) {
    db.Category.findAll({}).then(function(dbCategory) {
      res.json(dbCategory);
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

  //POST Routing
  app.post("/api/categories", function(req, res) {
    db.Category.create(req.body).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  //DELETE Routing
  app.delete("/api/categories", function(req, res) {
    db.Category.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });
};

const db = require("../models");

module.exports = function(app) {

  //GET Routing
  app.get("/api/=============", function(request, response) {
    
    //Add code for whatever it is we want to get.

  });

  //POST Routing
  app.post("/api/=============", function(request, response) {

    db.Category.create(request.body).then(function(dbCategory) {
      response.json(dbCategory);
    });
    
  });

  //DELETE Routing
  app.delete("/api/=============", function(request, response) {
    db.Category.destroy({
      where: {
        id: request.params.id
      }
    }).then(function(dbCategory) {
      response.json(dbCategory);
    });
  });

};

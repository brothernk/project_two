//Will be able to add more once we know what we're making slash
//what our database is going to look like. The equal signs are 
//placeholders.

//Dependencies
const db = require("../models");
const Sequelize = require('sequelize');

//Routing
module.exports = function(app){

	//do we want to just post the jokes that have less than x total votes
	//so that they are the ones that have to be voted on first?

	//GET Routing for all the posts
	app.get("/api/posts", function(request, response){
		db.Post.findOne({}).then(function(dbPost) {
      		res.json(dbPost);
	    });
	});

// Get rotue for retrieving a single post
	app.get("/api/posts/:id", function(request, response){
		db.Post.findOne({
	      where: {
	        id: request.params.id
	      }
	    }).then(function(dbPost) {
	      console.log(dbPost);
	      response.json(dbPost);
	    });
	});

	//POST Routing --------- MAY CHANGE "BODY" BASED ON DB
	app.post("/api/posts", function(request, response){

		db.Post.create(request.body).then(function(dbPost){
			response.json(dbPost);
		});

	});
// GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {
    var query = {};
    if (req.query.category_id) {
      query.CategoryId = req.query.category_id;
    }
    db.Post.findAll({
      where: query
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
	//DELETE Routing
	app.delete("/api/post", function(request, response){

		db.Post.destroy({
			where: {
				id:request.params.id
			}
		})
		.then(function(dbPost){
			response.json(dbPost);
		});
	});


  // PUT Routing
  app.put("/api/posts", function(request, response){

    db.Post.update(
      request.body,
    {
      where:{
        id:request.body.id
      }
    })
    .then(function(dbPost){
      response.json(dbPost);
    });
  });
};
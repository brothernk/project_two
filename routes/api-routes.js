//Dependencies
const db = require("../models");
const Sequelize = require('sequelize');

//Routing
module.exports = function(app){

	//do we want to just post the jokes that have less than x total votes
	//so that they are the ones that have to be voted on first?

	//GET Routing for getting all of the posts
  	app.get("/api/posts", function(request, response) {
	    let query = {};
	    if (request.query.category_id) {
	      query.CategoryId = request.query.category_id;
	    }
	    db.Post.findAll({
	      where: query
	    }).then(function(dbPost) {
	      response.json(dbPost);
	    });
	 });

	//GET Routing for retrieving a single post
	app.get("/api/posts/:id", function(request, response){
		db.Post.findOne({
	      where: {
	        id: request.params.id
	      }
	    }).then(function(dbPost) {
	    //  console.log(dbPost);
	      response.json(dbPost);
	    });
	});

	//POST Routing
	app.post("/api/posts", function(request, response){
		db.Post.create(request.body).then(function(dbPost){
			response.json(dbPost);
		});
	});
  
	//DELETE Routing
	app.delete("/api/post", function(request, response){
		db.Post.destroy({
			where: {
				id:request.params.id
			}
		}).then(function(dbPost){
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
	    }).then(function(dbPost){
	      response.json(dbPost);
	    });
	 });
};
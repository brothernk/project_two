//Will be able to add more once we know what we're making slash
//what our database is going to look like. The equal signs are 
//placeholders.

//Dependencies
const db = require("../models");

//Routing
module.exports = function(app){

	//GET Routing
	app.get("/api/=========", function(request, response){

		//Add code for whatever it is we want to get.

	});

	//POST Routing --------- MAY CHANGE "BODY" BASED ON DB
	app.post("/api/========", function(request, response){

		db.Post.create(request.body).then(function(dbPost){
			response.json(dbPost);
		});

	});

	//DELETE Routing
	app.delete("/api/========", function(request, response){

		db.Post.destroy({
			where: {
				id:request.params.id
			}
		})
		.then(function(dbPost){
			response.json(dbPost);
		});
	});

	app.put("/api/posts/:id", function(request, response){

    console.log('request:');
		console.log(request.params.id);

    db.Post.update({
      spicy: "2"
    },{
      where: {
        id: request.params.id
    }
    }).then(function(dbPost){
        response.json(dbPost);
      });

		// db.Post.update(
		// 	request.body,
		// 	{
		// 		where:{
		// 		id:request.body.id
		// 		}
		// 	})

	});
};
//Dependencies
const path = require("path");

//Routing
module.exports = function(app){

	app.get("/", function(req, res){

    res.render("index");


		// response.sendFile(path.join(__dirname, "../public/index.html"));
	});
	
};



// // Redirect to index
// router.get('/', function (req, res) {
//   res.redirect('/index');
// });


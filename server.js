//Dependencies
const express = require("express");
const bodyParser = require("body-parser");

//PORT
const PORT = process.env.PORT || 3000;

//Express
let app = express();

//Static Files
app.use(express.static(" "));

//Parsing
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//Routing
const routes = require(" ");
app.use(routes);

//Listening
app.listen(PORT, function(){
	console.log("Now listening at: http//:localhost:" + PORT);
});
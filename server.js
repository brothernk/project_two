//Dependencies
const express = require("express");
const bodyParser = require("body-parser");

//Express
let app = express();
const PORT = process.env.PORT || 3000;

//Models
const db = require("./models");

//Static Files
app.use(express.static("public"));

// Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Parsing
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Routing
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//Listening
db.sequelize.sync().then(function() {
  app.listen(PORT, function(){
    console.log("Now listening at: http//:localhost:" + PORT);
  });
});

//Dependencies
//const path = require("path");

var models = require('../models');


//Routing
module.exports = function(app){


  // Redirect to index
  app.get('/', function (req, res) {
    res.redirect('/index');
  });

  // RENDER
  app.get('/index', function (req, res) {
    models.Post.findAll()
    .then(function(data){
     // console.log(data.length);
      var object = { Post: data };
      res.render("index", object);
    })
  });


};






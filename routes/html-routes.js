//Dependencies
const models = require('../models');

//Routing
module.exports = function(app){

  //Redirect to index
  app.get('/', function (req, res) {
    res.redirect('/index');
  });

  //Render index
  app.get('/index', function (req, res) {
    models.Post.findAll({
        include: [models.Category]
      })
    .then(function(data){
      var object = { Post: data };
      res.render("index", object);
    })
  });
};
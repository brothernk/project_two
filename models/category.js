module.exports = function(sequelize, DataTypes) {
  let Category = sequelize.define("Category", {
    name: DataTypes.STRING
  });

  Category.associate = function(models) {
    Category.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

<<<<<<< HEAD
  // Category.create( {name: "Burns"} );
  // Category.create( {name: "Bar Jokes"} );
  // Category.create( {name: "Puns"} );
  // Category.create( {name: "Coding Jokes"} );
=======
  Category.create( {name: "Burns"} );
  Category.create( {name: "Bar Jokes"} );
  Category.create( {name: "Puns"} );  
  Category.create( {name: "Coding Jokes"} );
>>>>>>> 8d806a35a0d4ebf988b67089a552d4c43ee94068

  return Category;
  
};
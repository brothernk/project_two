module.exports = function(sequelize, DataTypes) {
  let Category = sequelize.define("Category", {
    name: DataTypes.STRING
  });

  Category.associate = function(models) {
    Category.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  // Category.create( {name: "Burns"} );
  // Category.create( {name: "Bar Jokes"} );
  // Category.create( {name: "Puns"} );
  // Category.create( {name: "Coding Jokes"} );

  return Category;
  
};
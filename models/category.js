module.exports = function(sequelize, DataTypes) {
  let Category = sequelize.define("Category", {
    name: DataTypes.STRING
  });

  Category.associate = function(models) {
    Category.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  // Category.create( {name: "Dad"} );
  // Category.create( {name: "Sven and Ole"} );
  // Category.create( {name: "Work"} );

  return Category;
  
};

//Title and body can obviously be adjusted once we get a clearer idea of
//what our app is going to do. Those were just the examples for the author thing

module.exports = function(sequelize, DataTypes) {
  let Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  return Post;
  
};

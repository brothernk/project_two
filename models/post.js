//Title and body can obviously be adjusted once we get a clearer idea of
//what our app is going to do. Those were just the examples for the author thing

module.exports = function(sequelize, DataTypes) {
  let Post = sequelize.define("Post", {
    entry: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    spicy: {
      type: DataType.Integer,
      defaultValue: 0 
    },
    icy: {
      type: DataType.Integer,
      defaultValue: 0 
    },
    category: {
      type: DataTypes.STRING,
    }
  });

  Post.associate = function(models) {
    Post.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;

};


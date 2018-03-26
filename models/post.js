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
      type: DataTypes.INTEGER,
      defaultValue: 0 
    },
    icy: {
      type: DataTypes.INTEGER,
      defaultValue: 0 
    },
  });

  Post.associate = function(models) {
    Post.belongsTo(models.Category, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};




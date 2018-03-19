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
      foreignKey: {
        allowNull: false 
      }
    });
  };

//had CategoryId and foreignKey after the entry but neither posts category foreign key to the post
//it looks like that has to be done in the api routes

  // Post.create( {
  //   entry: "Someone has stolen my Microsoft Office and they are going to pay for it, you have my Word."
  // } );

  // Post.create( {
  //   entry: "A computer once beat me at chess, but it was no match for me at kick boxing."
  // } );

  // Post.create( {
  //   entry: "If your parachute doesn't deploy, you have the rest of your life to fix it."
  // } );


  return Post;

};




module.exports = (sequelize, DataTypes)=>{

    const Comment = sequelize.define('Comment', {
  
      text : {
        type : DataTypes.STRING,
        allowNull : false,
      },

  
    } );
  
    Comment.associate = (models)=>{
    
        Comment.hasMany(models.Tags, {
        foreignkey :'commentId',
        as : 'tags',
      })
  
    }
  
  return Comment;
  
  }
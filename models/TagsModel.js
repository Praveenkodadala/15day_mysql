



module.exports = (sequelize, DataTypes)=>{

    const Tags = sequelize.define('Tags', {
      
      title : {
        type : DataTypes.INTEGER,
        allowNull : false,
      }
  
  
    } );
  
  
    Tags.associate = (models)=>{
        Tags.belongsTo(models.Comment, {
        foreignkey : 'commentId',
        onDelete : 'CASECADE'
  
      })
  
    }
  
  
  return Tags;
  }
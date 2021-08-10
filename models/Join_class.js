'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
const Schedule = require('./schedule');
module.exports = (sequelize, DataTypes) => {
  class Join_class extends Model {
    
    static associate({ User, Join_class, Schedule, MyClass}) {
      Join_class.belongsTo(User);
      Join_class.belongsTo(MyClass,{
        foreignKey: "classId",
      });
      Join_class.belongsToMany(Schedule, { through: "Presence"});
    }
  };
  Join_class.init({
    id:{
      type:DataTypes.UUID, 
      defaultValue: Sequelize.UUIDV4,
      primaryKey:true,
    },
    classId: {type: DataTypes.UUID, allowNull: false },
    userId: {type: DataTypes.UUID, allowNull: false },   
    role: { type:DataTypes.STRING(10), defaultValue: "student"},
  }, 
  {
    sequelize,
    modelName: 'Join_class',
    tableName: 'Join_class',
  });
  return Join_class;
};
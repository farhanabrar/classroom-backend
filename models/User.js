'use strict';
const { Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate({ User, Join_class }) {
      User.hasMany(Join_class, {
        foreignKey: "user_id",
      });
    }
  };
  User.init({
    id:{
      type:DataTypes.UUID, 
      defaultValue: Sequelize.UUIDV4,
      primaryKey:true,
    },
    name: DataTypes.STRING(50),
    phone: DataTypes.STRING(12),
    address: DataTypes.STRING(30),
    place_birth: { type: DataTypes.STRING },
    birthdate: { type: DataTypes.DATEONLY},
    email: { type: DataTypes.STRING(100), allowNull: false },
    password: { type: DataTypes.TEXT, allowNull: false },
    last_study:DataTypes.STRING(20),
    institution:DataTypes.STRING(50),
    current_job:DataTypes.STRING(50),
    sosmed:DataTypes.STRING(100),


  }, 
  {
    timestamps: true,
    sequelize,
    modelName: 'User',
    tableName: 'user',
  });
  return User;
};
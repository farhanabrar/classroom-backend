'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ MyClass, Join_class, Schedule}) {
      MyClass.hasMany(Join_class, {
        foreignKey: "class_id",
      });
      MyClass.hasMany(Schedule, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
        foreignKey: "class_id",
      });
    }
  };
  MyClass.init({
    id: {
      type:DataTypes.UUID, 
      defaultValue: Sequelize.UUIDV4,
      primaryKey:true,
    },
    code: {
      type:DataTypes.STRING(6), 
      allowNull:false
    },
    name: DataTypes.STRING(50),
    description: DataTypes.STRING,
    dateStart: {
      type: DataTypes.DATEONLY,
    },
    dateEnd: {
      type: DataTypes.DATEONLY,
    },
  }, {
    sequelize,
    modelName: 'MyClass',
    tableName: 'classes',
    
  });
  return MyClass;
};
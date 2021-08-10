'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ MyClass, Schedule, Join_class, Materials }) {
      Schedule.belongsTo(MyClass, {
        foreignKey: "class_id",
      });
      Schedule.belongsToMany(Join_class, { through: "Presence"});
      Schedule.hasMany(Materials, {
        foreignKey: "schedule_id",
      });
    }
  };
  Schedule.init({
    id: {
      type:DataTypes.UUID, 
      defaultValue: Sequelize.UUIDV4,
      primaryKey:true,
    },
    class_id:{
      type:DataTypes.UUID,
    },
    name: {
      type: DataTypes.STRING(50),
    },
    code: {
      type: DataTypes.STRING(6),
    },
    start: {
      type: DataTypes.DATE,
    },
    end: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Schedule',
    tableName: 'schedule',
  });
  return Schedule;
};
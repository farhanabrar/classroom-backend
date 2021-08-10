'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
const schedule = require('./schedule');
module.exports = (sequelize, DataTypes) => {
  class Materials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Materials, Schedule}) {
      Materials.belongsTo(Schedule, {
        foreignkey: "schedule_id"
      });
    }
  };
  Materials.init({
    id: {
      type:DataTypes.UUID, 
      defaultValue: Sequelize.UUIDV4,
      primaryKey:true,
    },
    schedule_id: {
      type: DataTypes.UUID,
    },
    name: {
      type: DataTypes.STRING(100),
    },
    file: {
      type: DataTypes.TEXT('tiny'),
    },
  }, {
    sequelize,
    modelName: 'Materials',
    tableName: 'materials',
  });
  return Materials;
};
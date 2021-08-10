'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Presence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Presence.init({
    Join_class_id: {
      type:DataTypes.UUID
    },
    Schedule_id: {
      type:DataTypes.UUID, 
    },
  }, {
    sequelize,
    modelName: 'Presence',
    tableName: 'presence',
  });
  return Presence;
};
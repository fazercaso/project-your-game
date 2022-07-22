'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic }) {
      // define association here
      Question.belongsTo(Topic, { foreignKey: 'topic_id' });
    }
  }
  Question.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    topic_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Topics'
        },
        key: 'id',
      },
    },
    question_point: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    question_text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    answer_text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'Questions',
  });
  return Question;
};

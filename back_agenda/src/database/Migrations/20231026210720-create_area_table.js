'use strict';

const { AREA_TABLE } = require('./../Models/area.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('areas', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique:true,
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    observation: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    },
    });
  },

  async down(queryInterface, Sequelize) {
   
     await queryInterface.dropTable(AREA_TABLE);
  },
};

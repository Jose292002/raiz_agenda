'use strict';

const { AGENDA_TABLE } = require('./../Models/agenda.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('agendas', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      hour_start:{
        type: Sequelize.DataTypes.TIME,
        allowNull: false,  
      },
      hour_end:{
          type:Sequelize.DataTypes.TIME,
          allowNull: false
      },
      user_id:{
          type:Sequelize.DataTypes.INTEGER
      },
      place:{
          type: Sequelize.DataTypes.STRING,
          allowNull:false
      },
      status:{
          type: Sequelize.DataTypes.BOOLEAN
      },
    });
  },

  async down(queryInterface, Sequelize) {
   
     await queryInterface.dropTable(AGENDA_TABLE);
  },
};

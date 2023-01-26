"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Posts", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      date_posted: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_Id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      likes: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      reposts: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      //commenting: {
      //  allowNull: false,
      //  defaultValue: " ",
      //  type: Sequelize.STRING,
     // },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("Posts");
  },
};

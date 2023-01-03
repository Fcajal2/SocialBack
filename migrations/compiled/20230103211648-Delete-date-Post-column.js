"use strict";

const { UUIDV4 } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Posts", "date_posted");
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn("Posts", "date_posted", Sequelize.DATE);
  },
};

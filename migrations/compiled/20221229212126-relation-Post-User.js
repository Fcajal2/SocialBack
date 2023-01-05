"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Posts", {
      fields: ["userId"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.removeConstraint("Posts", "posts_ibfk_1");
  },
};

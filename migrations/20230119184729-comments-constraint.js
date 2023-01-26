"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Posts", {
      fields: ["commenting"],
      type: "foreign key",
      references: {
        table: "Posts",
        field: "id",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.removeConstraint(
      "Posts",
      "Posts_commenting_Posts_fk"
    );
  },
};

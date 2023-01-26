"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Posts", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.removeConstraint("Posts", "posts_user_id_Users_fk");
  },
};

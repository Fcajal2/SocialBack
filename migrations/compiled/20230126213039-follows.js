"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Follows", {
      follower_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      followed_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    await queryInterface.addConstraint("Follows", {
      fields: ["follower_id"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("Follows", {
      fields: ["followed_id"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "Follows",
      "Follows_follower_id_Users_fk"
    );
    await queryInterface.removeConstraint(
      "Follows",
      "Follows_followed_id_Users_fk"
    );
    await queryInterface.dropTable("Follows");
  },
};

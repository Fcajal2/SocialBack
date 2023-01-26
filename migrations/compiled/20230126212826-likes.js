"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Likes", {
      user_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      post_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    await queryInterface.addConstraint("Likes", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("Likes", {
      fields: ["post_id"],
      type: "foreign key",
      references: {
        table: "Posts",
        field: "id",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Likes", "Likes_user_id_Users_fk");
    await queryInterface.removeConstraint("Likes", "Likes_post_id_Posts_fk");
    await queryInterface.dropTable("Likes");
  },
};

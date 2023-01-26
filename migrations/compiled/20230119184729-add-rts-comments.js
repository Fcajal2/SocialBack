"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn("Posts", "reposts", {
        defaultValue: 0,
        type: Sequelize.Integer,
      }),
      queryInterface.addColumn("Posts", "commenting", {
        defaultValue: " ",
        allowNUll: false,
        type: Sequelize.STRING,
      }),
      queryInterface.addConstraint("Posts", {
        fields: ["commenting"],
        type: "foreign key",
        references: {
          table: "Posts",
          field: "id",
        },
      }),
    ]);
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeConstraint("Posts", "Posts_commenting_Posts_fk"),
      queryInterface.removeColumn("Posts", "commenting"),
      queryInterface.removeColumn("Posts", "reposts"),
    ]);
  },
};

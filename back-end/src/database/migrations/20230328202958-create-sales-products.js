"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sales_products", {
      sale_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "sales", key: "id" },
        primaryKey: true,
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "products", key: "id" },
        primaryKey: true,
      },
      quantity: { allowNull: false, type: Sequelize.INTEGER },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("sales_products");
  },
};

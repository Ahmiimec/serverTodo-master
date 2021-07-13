'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return[
      await queryInterface.addColumn(
        'todos',   //table name
        'priority',               //column name
        {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        }
      ),
     
      ]
  },

  down: async (queryInterface, Sequelize) => {
    return  queryInterface.removeColumn('todos', 'priority');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

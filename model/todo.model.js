module.exports = (sequelize, Sequelize) => {
    const todo = sequelize.define("todo", {
      task: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      priority: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
    });
  
    return todo;
  };
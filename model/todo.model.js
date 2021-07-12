module.exports = (sequelize, Sequelize) => {
    const todo = sequelize.define("todo", {
      task: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });
  
    return todo;
  };
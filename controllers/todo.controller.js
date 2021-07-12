const db = require("../model");
const todo = db.todo;
const Op = db.Sequelize.Op;

// Create and Save a new item in TODO LIST
exports.create = (req, res) => {
    // Validate request
    if (!req.body.task) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    if (req.body.status.toLowerCase() !== 'completed' && req.body.status.toLowerCase() !== 'pending'){
      res.status(400).send({
        message: `Status must be either 'Completed' or 'Pending'`
      })
      return;
    }
  
    // Create a item
    const newTask = {
      task: req.body.task,
      status: req.body.status,
  
    };
  
    // Save Tutorial in the database
    todo.create(newTask)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

  // Find All the items in TodoList
  exports.findAll = (req, res) => {

    todo.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

  //Update the item in TodoList
  exports.update = (req, res) => {
    const id = req.params.id;

    if (req.body.status && req.body.status.toLowerCase() !== 'completed' && req.body.status.toLowerCase() !== 'pending'){
      res.status(400).send({
        message: `Status must be either 'Completed' or 'Pending'`
      })
      return;
    }
  
    todo.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Task was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Task with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Task with id=" + id
        });
      });
  };
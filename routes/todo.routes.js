module.exports = app => {
    const tutorials = require("../controllers/todo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorials.create);
  
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
 
  
    app.use('/api/todo', router);
  };
const db = require("../models");
const task = db.task;
const Op = db.Sequelize.Op;

// Create and Save a new task
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "task can not be empty!"
      });
      return;
    }
  
    // Create a task
    const task = {
      description: req.body.description,
      userId:req.body.userId,
    };
  
    // Save task in the database
    task.create(task)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the task."
        });
      });
  };

// Retrieve all task from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = userId ? { userId: { [Op.eq]: `%${userId}%` } } : null;
  
    task.findAll({ where: condition })
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

// Find a single task with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    task.findByPk(id,{ include: ["user"] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

// Update a task by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    task.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };

// Delete a task with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    task.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };

// Delete all task from the database.
exports.deleteAll = (req, res) => {
    task.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };
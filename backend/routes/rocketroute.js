// Import necessary dependencies
const rocketrouter = require("express").Router();
const rocket = require("../models/rocket");

// POST Route: Create new rocket data
rocketrouter.post("/", (req, res) => {
  // Extract data from the request body
  const data = req.body;

  // Insert data into the "rocket" model
  rocket.insertMany(data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

// GET Route: Retrieve all rocket data
/*rocketrouter.get("/", (req, res) => {
  // Find all rocket data
  rocket.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});*/
rocketrouter.get("/", async (req, res) => {
  try {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const pageSize = 10;

    const totalDocuments = await rocket.countDocuments({});
    const totalPages = Math.ceil(totalDocuments / pageSize);

    const documents = await rocket.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json({
      data: documents,
      currentPage: page,
      totalPages: totalPages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET Route: Retrieve a specific rocket by ID
rocketrouter.get("/:id", (req, res) => {
  // Find rocket data by ID
  rocket.findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

// PUT Route: Update existing rocket data by ID
rocketrouter.put("/:id", (req, res) => {
  // Extract the ID from the request parameters
  const _id = req.params.id;

  // Find and update the rocket data by ID
  rocket.findByIdAndUpdate(_id, req.body)
    .then((data) => {
      // Check if data exists for the provided ID
      if (!data) {
        res.status(404).send({ message: "Cannot update, maybe ID is not found: " + _id });
      } else {
        res.send({ message: "Update successful" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating with ID " + _id });
    });
});

// DELETE Route: Delete a rocket by ID
rocketrouter.delete("/:id", (req, res) => {
  // Extract the ID from the request parameters
  const _id = req.params.id;

  // Find and delete the rocket data by ID
  rocket.findByIdAndDelete(_id)
    .then((data) => {
      // Check if data exists for the provided ID
      if (!data) {
        res.status(404).send({ message: "Cannot delete, maybe ID is not found: " + _id });
      } else {
        res.send({ message: "Delete successful" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Cannot delete with ID " + _id });
    });
});

// Export the router for use in other parts of the application
module.exports = rocketrouter;






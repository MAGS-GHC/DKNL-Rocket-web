// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Create an instance of Express
const app = express();

// Load environment variables from .env file
require("dotenv-flow").config();

// Enable Cross-Origin Resource Sharing (CORS)
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

// Parse incoming JSON requests
app.use(bodyParser.json());

// Set the port number for the server
const PORT = process.env.PORT || 5500;

// Import routes for handling rocket-related API endpoints
const rocketRoutes = require("../backend/routes/rocketroute");

// Define a simple welcome route
app.get("/api", (req, res) => {
  res.status(200).send({ message: "Welcome to the jungle" });
});

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.DBHOST, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((error) => console.log("Error connecting to the database: " + error));

// Log a success message once the MongoDB connection is open
mongoose.connection.once("open", () => console.log("Successfully connected to MongoDB"));

// Use the defined rocket routes
app.use("/api/rocket", rocketRoutes);

<<<<<<< Updated upstream
/*app.use("/api/seatrows",seatrowRoutes);
app.use("/api/sections",sectionRoutes);
app.use("/api/venue", venueRoutes);
app.use("/api/user", authRoutes);*/

// holder altid øje med serveren*/
=======
// Start the server and listen on the specified port
>>>>>>> Stashed changes
app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});

// Export the app instance for potential testing or other use
module.exports = app;

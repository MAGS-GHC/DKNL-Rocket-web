const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("dotenv-flow").config();

// en masse dependencies

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());

const PORT = process.env.PORT || 5500;

// her kommer ind i routes
const rocketRoutes = require("../backend/routes/rocketroute");
/*const seatrowRoutes = require("./routes/seatrow");
const sectionRoutes = require("./routes/section");
const venueRoutes = require("./routes/venue");
const authRoutes = require("./routes/auth");*/

app.get("/api", (req, res) => {
  res.status(200).send({ message: "Welcome to the jungle" });
});

// laver port connection
mongoose
  .connect(process.env.DBHOST, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  // catch error
  .catch((error) => console.log("error to db" + error));

mongoose.connection.once("open", () => console.log("Success to MONGODB"));


// her får vi brugt al de data vi har i de andre filer og laver api endpoints
// for at oprette flere, spørg kasper :D :D :D :D

app.use("/api/rocket", rocketRoutes);

/*app.use("/api/seatrows",seatrowRoutes);
app.use("/api/sections",sectionRoutes);
app.use("/api/venue", venueRoutes);
app.use("/api/user", authRoutes);*/

// holder altid øje med serveren*/
app.listen(PORT, function () {
  console.log("server is running " + PORT);
});
module.exports = app;

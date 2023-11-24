const rocketrouter = require("express").Router();
const rocket = require("../models/rocket");

rocketrouter.post("/", (req, res) => {
  // data er den som man indtaster fra request.body
  data = req.body;
  rocket
    .insertMany(data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

// Indlæser data på siden  localhost:4000/api/rocket eller localhost:4000/api/sections
//
rocketrouter.get("/", (req, res) => {
  rocket
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

// Indlæser data ved at bruge rocket.findById(req.params.id) hvor /req.params.id) er object.id i Mongodb
// under Database --> Browse collection --> rocket/section ved hjælp af
rocketrouter.get("/:id", (req, res) => {
  rocket
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

//Opdatere allerede eksisterende data ved brug PUT i fx postman eller thunderclient og udflyder den samme som før men med PUT i stedet for POST
// const id = req.params.id er indtastet til sidst i URL'en fx. localhost:4000/api/rocket/fnwdigom2ie913990qgmf
// den finder du ved at bruge get command på localhost:4000/api/rocket/
rocketrouter.put("/:id", (req, res) => {
  const _id = req.params.id;

  rocket
    .findByIdAndUpdate(_id, req.body)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: "cant update, maybe id is not there" + _id });
      } else {
        res.send({ message: "update succesfull" });
      }
    })

    .catch((err) => {
      res.status(500).send({ message: "error updating with id " + _id });
    });
});

// den her sletter routen eller rocket ved hjælp af den førnævnte id
rocketrouter.delete("/:id", (req, res) => {
  const _id = req.params.id;

  rocket
    .findByIdAndDelete(_id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: "cant delete, maybe id is not there" + _id });
      } else {
        res.send({ message: "delete succesfull" });
      }
    })

    .catch((err) => {
      res.status(500).send({ message: "cannot delete   " + _id });
    });
});
// exporterer
module.exports = rocketrouter;

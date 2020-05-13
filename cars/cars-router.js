const express = require("express");

const db = require("../data/dbConnection.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("car-dealer")
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("car-dealer")
    .where({ id })
    .first()
    .then((car) => {
      res.json(car);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve car" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("car-dealer")
    .insert(carData)
    .then((ids) => {
      db("car-dealer")
        .where({ id: ids[0] })
        .then((newCarEntry) => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch((err) => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db("car-dealer")
    .where({ id })
    .update(changes)
    .then((count) => {
      if (count) {
        res.json({ updated: count });
      } else {
        res.status(200).json(count);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "cannot update " });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("car-dealer")
    .where({ id })
    .del({ id })
    .then((deleted) => {
      res.status(200).json(deleted);
    })
    .catch((err) => {
      res.status(500).json({ message: "cannot delete" });
    });
});

module.exports = router;

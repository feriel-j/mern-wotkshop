const express = require("express");
const personRouter = express.Router();
const Person = require("../models/person");

// create a person and save it
// req.body
// METHODE: POST

personRouter.post("/", async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    let result = await newPerson.save();
    res.send({ result: result, msg: "user added" });
  } catch (error) {
    console.log(error);
  }
});

// get all persons
// METHODE: GET
personRouter.get("/", async (req, res) => {
  try {
    let result = await Person.find();
    res.send({ persons: result, msg: "all users" });
  } catch (error) {
    console.log(error);
  }
});

// get one person
// METHODE: GET
// params

personRouter.get("/:id", async (req, res) => {
  try {
    const result = await Person.findOne({ _id: req.params.id });
    res.send({ persons: result, msg: "user" });
  } catch (error) {
    console.log(error);
  }
});

// update person
// METHODE: put
// params
// req.body
personRouter.put("/:id", async (req, res) => {
  try {
    let result = await Person.findOneAndUpdate({
      _id: req.params.id,
      $set: { ...req.body },
    });
    res.send({ newUser: result, msg: "user updated" });
  } catch (error) {
    console.log(error);
  }
});

// delete person
// METHODE: DELETE
// params

personRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Person.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: "user deleted" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = personRouter;

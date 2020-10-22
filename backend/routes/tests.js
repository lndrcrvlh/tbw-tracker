const router = require("express").Router();
const Test = require("../models/test.model");

router.route("/").get((req, res) => {
  Test.find()
    .then((tests) => res.json(tests))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const result = req.body.result;

  const newTest = new Test({
    result,
  });

  newTest
    .save()
    .then(() => res.json("test added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

const router = require("express").Router();
const Progress = require("../models/progress.model");

router.route("/").get((req, res) => {
  Progress.find()
    .then((progresses) => res.json(progresses))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const student = req.body.student;
  const behavior = req.body.behavior;
  const trials = req.body.trials;
  
  const newProgress = new Progress({
    student,
    behavior,
    trials
  });

  newProgress
    .save()
    .then(() => res.json("Progress added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});



module.exports = router;

const router = require("express").Router();
const Progress = require("../models/progress.model");

router.route("/").get((req, res) => {
  Progress.find()
    .then((progresses) => res.json(progresses))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const s_id = req.body.s_id;
  const b_id = req.body.b_id;
  const num_passed = req.body.num_passed;
  const num_failed = req.body.num_failed;
  const times_tested = req.body.times_tested;
  const phase = req.body.phase;

  const newProgress = new Progress({
    s_id,
    b_id,
    num_passed,
    num_failed,
    times_tested,
    phase,
  });

  newProgress
    .save()
    .then(() => res.json("Progress added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

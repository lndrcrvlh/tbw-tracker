const router = require("express").Router();
const Behavior = require("../models/behavior.model");

router.route("/").get((req, res) => {
  Behavior.find()
    .then((behaviors) => res.json(behaviors))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const objective = req.body.objective;
  const setting = req.body.setting;
  const reinforcement_schedule = req.body.reinforcement_schedule;
  const materials_required = req.body.materials_required;
  const program_procedure = req.body.program_procedure;
  const mastery_criteria = req.body.mastery_criteria;

  const newBehavior = new Behavior({
    name,
    objective,
    setting,
    reinforcement_schedule,
    materials_required,
    program_procedure,
    mastery_criteria
  });

  newBehavior
    .save()
    .then(() => res.json("Behavior Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

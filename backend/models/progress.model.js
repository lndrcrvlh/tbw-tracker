import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProgressSchema = new Schema({
  s_id: { type: String, required: true },
  b_id: { type: String, required: true },
  num_passed: { type: Number },
  num_failed: { type: Number },
  times_tested: { type: Number },
  phase: { type: Number },
});

const Progress = mongoose.model("Progress", ProgressSchema)

module.exports = Progress;
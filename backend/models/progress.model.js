const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProgressSchema = new Schema({
  student: {
    s_id: { type: String, required: true }, 
    s_name: { type: String, required: true },
  },
  behavior:{
    b_id: { type: String, required: true },
    b_name: { type: String, required: true },
  },
  trials:{type: Array, default:[]}, //eventually [{passed: 3, failed:2, phase: 1},{passed: 2, failed:3, phase: 1}]
});

const Progress = mongoose.model("Progress", ProgressSchema);

module.exports = Progress;

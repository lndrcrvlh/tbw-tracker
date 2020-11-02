const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  s_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  s_age: { type: Number },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

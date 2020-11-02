const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    student_name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },s_age: {type: Number},
    behaviors_training:{
        behavior_id: []
    }
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
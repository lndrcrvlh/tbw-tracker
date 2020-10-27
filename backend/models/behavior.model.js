const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const behaviorSchema = new Schema(
    {
        name: {type:String, required:true},
        objective: {type:String},
        setting: {type:String},
        reinforcement_schedule: {type:String},
        materials_required:{type:String},
        program_procedure:{type:String},
        mastery_criteria:{type:String}
    }
);

const Behavior = mongoose.model("Behavior", behaviorSchema);

module.exports = Behavior;
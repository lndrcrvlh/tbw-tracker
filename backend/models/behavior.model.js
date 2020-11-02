const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//what I call here 'behavior' should really be
//called program in technical terms, and in the
//interface in future should be referred to as such

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
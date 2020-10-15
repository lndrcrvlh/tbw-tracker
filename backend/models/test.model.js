const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testSchema = new Schema(
    {
        pass: {type: Boolean, required:true}
    }
);

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
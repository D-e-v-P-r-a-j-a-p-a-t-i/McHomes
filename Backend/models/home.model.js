const { Schema, model } = require("mongoose")

const housingSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    availableUnits: {
        type: Number,
        required: true
    },
    wifi: {
        type: Boolean,
        required: true
    },
    laundry: {
        type: Boolean,
        required: true
    }
});

const Housing = new model('Housing', housingSchema);

module.exports = Housing;
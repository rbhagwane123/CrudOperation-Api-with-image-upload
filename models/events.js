const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    file: {
        type: String,
        required: true,
        default:'IMG_20230312_203410.jpg'
    },
    tagline: {
        type: String,
        required: true
    },
    schedule: {
        type: Date,
        required: true,
        default: Date.now,
    },
    descrption: {
        type: String,
        required: true,
    },
    moderator: {
        type: String,
        rrequired: true,
    },
    category: {
        type: String,
        required: true,
    },
    sub_category: {
        type: String,
        required: true,
    },
    rigor_rank: {
        type: Number,
        required: true,
    }

});

module.exports = mongoose.model('Events', eventSchema);
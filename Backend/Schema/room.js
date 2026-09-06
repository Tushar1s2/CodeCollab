const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    language: {
        type: [String]
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date
    },
    members:[{
        type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        
    }]
});

module.exports = mongoose.model('Room', roomSchema);
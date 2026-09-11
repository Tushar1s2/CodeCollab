const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendsSchma = new Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        enum: ["Accepted", "Rejected", "Pending"],
        required: true,
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
);

module.exports=mongoose.model("Friend",friendsSchma);
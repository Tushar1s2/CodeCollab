const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    avatar: {
        type: String
    },

    provider: {
        type: String,
        enum: ["Google", "Github"],
        required: true
    },

    providerId: {
        type: String,
        required: true
    },

    passwordHash: {
        type: String,
    },

    lastLogin: {
        type: Date,
        required: true
    },
    role:{
        type:String
    },
    bio:{
        type:String
    },
    location:{
        type:String
    },
    joinedAt:{
        type:Date,
    },
    skills:{
        type:[String]
    }
}); 

userSchema.index(
    { provider: 1, providerId: 1 },
    { unique: true }
);

module.exports = mongoose.model("User", userSchema);
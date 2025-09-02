// const express = require(express)
const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    theme: {
        type: String,
        enum: ["light", "dark"],
        default: "light"
    }
})
const userModel = mongoose.model("user", UserSchema)

module.exports = userModel
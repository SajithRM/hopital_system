const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
        
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    nitem: {
        type: String,
        required: true
        
    },
    sdate: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

const users = new mongoose.model("users",userSchema);


module.exports = users;
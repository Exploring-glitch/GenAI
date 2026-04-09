import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name:{type: String, unique: true, }
})



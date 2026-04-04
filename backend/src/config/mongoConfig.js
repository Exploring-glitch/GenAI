import mongoose from "mongoose";

export const connectDb = async ()=> {
    try{
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database");
    } 
    catch(e){
        console.log("Error connecting to database. Error:", e.message);
        process.exit(1)
    }
}
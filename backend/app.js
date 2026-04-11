import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config({ path: "./src/env/.env" })
import { connectDb } from "./src/config/mongoConfig.js";
import authRouter from './src/routes/authRoute.js'

app.use(express.json());
app.use("/api/auth", authRouter)




const PORT = 3000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
import express from "express";
const app = express();

import dotenv from 'dotenv';
dotenv.config({ path: "./src/env/.env" })

import { connectDb } from "./src/config/mongoConfig.js";

app.use(express.json());



const PORT = 3000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
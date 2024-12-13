import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controller/baiken.controller.js";

dotenv.config();

mongoose.connect(process.env.url_bd)
.then(() => {
    console.log("si jala amigo")
}) 
.catch((error) => {
    console.log("no se pudo y no se donde", error)
})

const app = express()
app.use(cors())
app.listen(4000, ()=>{
    console.log("si se escucha viejo")
})


test()
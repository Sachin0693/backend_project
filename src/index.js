// require('dotenv').config({path: './env'});

import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import DBconnect from "./db/index.js";

dotenv.config({
    path: './env'
})

// import express from "express"
// const app = express()

// ( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("error:", error);
//             throw error
//         })

//         app.listen(process.env.PORT,() => {
//             console.log(`port is listening on port ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.error("ERROR: ",error)
//         throw error
//     }
// })()

DBconnect();
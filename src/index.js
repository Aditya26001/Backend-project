import dotenv from "dotenv"
import app from "./app.js"

import connectDB from "./db/index.js"
//require('dotenv').config({path:'./env'})

dotenv.config()
connectDB()
.then(()=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection Error",err);
})
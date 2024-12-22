import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/database.js';
import userRoute from "./routes/user.route.js";
import bodyParser from 'body-parser';
dotenv.config();

const app = express();

connectDB();

const PORT=process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/v1/user", userRoute);

app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`);
})
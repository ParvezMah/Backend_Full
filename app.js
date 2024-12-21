import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/database.js';
dotenv.config();

const app = express();

connectDB();

const PORT=3000;

app.listen(PORT, ()=>{
    console.log(`Server lisen at port ${PORT}`);
})
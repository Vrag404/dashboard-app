import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoUri: string = (process.env.MONGODB_URI as string);

mongoose
    .connect(mongoUri)
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
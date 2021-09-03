/* 
    body-parser: enable send requests
    cors: enable cors orgin requests
    express: routing epxress framework
    mongoose: creating models / connect mongoDB
    nodemon: auto reset
*/
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// import routers
import healthDetailRouter from './routes/healthDetail.js';
import userRouter from './routes/user.js';
import dietRouter from './routes/diet.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// HD Router
app.use('/HD', healthDetailRouter);
// user Router
app.use('/user', userRouter);
// diet Router
app.use('/diet', dietRouter);

// connect to mongoDB
// const CONNECTION_URL = 'mongodb+srv://Liam:Liam1809@cluster0.ifm61.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false); //  no warnings in the console
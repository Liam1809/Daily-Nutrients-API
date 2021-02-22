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

import healthDetailRouter from './routes/healthDetail.js';
import userRouter from './routes/user.js';
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/HD', healthDetailRouter);
app.use('user', userRouter);

const CONNECTION_URL = 'mongodb+srv://Liam:18091999@cluster0.edpoc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false); //  no warnings in the console
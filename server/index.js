import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit:"20mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));

app.use(cors());

app.use('/posts',postRoutes);

//connection
const CONNECTION_URL = 'mongodb+srv://kamal:1b2c3d4f@cluster0.scges.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT,() =>
console.log(`connection is eslablished and running on port : ${PORT}`)
)).catch((err) => console.log(err.message));

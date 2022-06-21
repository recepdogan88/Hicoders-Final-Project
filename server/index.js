import express from "express";
import bodyParser from'body-parser'; // post islemleri icin, payload okunmasini saglar
import cors from 'cors';
import {router as studentRouter} from './controller/students-router.js'
import { router as questionRouter } from "./controller/question-router.js";
import { router as examRouter } from "./controller/exam-router.js";


const app = express();

// Configuring body parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/students', studentRouter);
app.use("/", questionRouter);
app.use("/",examRouter)


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(5000, ()=>{
    console.log("rest api server has benn just on port 5000 started!")
});
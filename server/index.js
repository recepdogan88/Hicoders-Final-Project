import express from "express";
import bodyParser from'body-parser'; // post islemleri icin, payload okunmasini saglar
import cors from 'cors';
import {router as studentRouter} from './controller/students-router.js'
const app = express();

// Configuring body parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', studentRouter);
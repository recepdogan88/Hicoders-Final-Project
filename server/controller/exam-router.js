import express from 'express';
import * as examService from '../service/exam-service.js';
const router = express.Router();

router.get("/exams", async (req, res)=>{
    const examlist = await examService.getExams();
    res.status(200).send(examlist);
})

router.get("/exams/:id", async (req, res)=>{
    const examId = req.params.id;
    const exam = await examService.getExam(examId);
    res.status(200).send(exam);
})

router.post("/exams", async (req, res)=>{
    const exam = req.body;
    const newExam = await examService.createExam(exam);
    res.status(201).send(exam);
})

router.put("/exams/:id", async (req, res)=>{
    const examId = req.params.id;
    const existingExam = req.body;
    const updatedExam = await examService.updateExam(examId,  existingExam);
    
    res.status(200).send(updatedExam);
})

router.delete("/exams/:id", async (req, res)=>{
    const examId = req.params.id;
    await examService.removeExam(examId);
    res.status(200).send(null);
})

export {router };
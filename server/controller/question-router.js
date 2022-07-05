import express from 'express';
import * as questionService from '../service/question-service.js';
const router = express.Router();

router.get("/questions", async (req, res)=>{
    const {q: query} = req.query;
    const list = await questionService.getQuestions(query);
    res.status(200).send(list);
})



router.get('/:examId/examQuestions', async (req, res) => {
    const {examId} = req.params;
    try {
        const questions = await questionService.getExamQuestions(examId);
        res.status(200).send(questions);   
    } catch (error) {
        res.status(400).json(error.message)
    } 
 
} )
router.get("/questions/:id", async (req, res)=>{
    const questionId = req.params.id;
    const question = await questionService.getQuestion(questionId);
    res.status(200).send(question);
})

router.post("/questions", async (req, res)=>{
    const question = req.body;
    const newQuestion = await questionService.createQuestion(question);
    res.status(201).json(question);
})

router.put("/questions/:id", async (req, res)=>{
    const questionId = req.params.id;
    const existingQuestion = req.body;
    const updatedQuestion = await questionService.updateQuestion( questionId, existingQuestion);

    res.status(200).send(updatedQuestion);
})

router.delete("/questions/:id", async (req, res)=>{
    const questionId = req.params.id;
    await questionService.removeQuestion(questionId);
    res.status(200).send(null);
})

export {router};

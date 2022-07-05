import express from 'express';
import * as resultService from '../service/result-service.js';

const router = express.Router();

router.get("/result", async (req, res)=>{
    const list = await resultService.getResult();
    res.status(200).send(list);
}); 


router.post('/result', async(req, res)=> {
    const {score, studentId, examId} = req.body;
    try {
        await resultService.addResult(studentId, examId, score); 
        res.status(200).send()
    } 
    catch (error) {
        res.status(400).json(error.message)
    }
})



export {router};
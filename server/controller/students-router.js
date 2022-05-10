import express from 'express';
const router = express.Router();

router.get("/students", async (req, res)=>{
    res.status(200).send("hello");
})

router.get("/:id", async (req, res)=>{
    const studentId = req.params.id;
    const student = await taskService.getEngineer(studentId);
    res.status(200).send(student);
})

router.post("/", async (req, res)=>{
    const student = req.body;
    const newStudent = await taskService.createEngineer(student);
    res.status(201).send(newStudent);
})

export {router};
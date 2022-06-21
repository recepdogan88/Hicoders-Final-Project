import express from 'express';
import { User } from '../data/sequelize.js';
import * as studentService from '../service/student-service.js';
import bcrypt from 'bcrypt'
const router = express.Router();

router.get("/", async (req, res)=>{
    const list = await studentService.getStudents();
    res.status(200).send(list);
}); 

router.post('/signup', async(req, res)=> {
    const {email, password} = req.body; 
    try {
        const user = await studentService.findByEmail(email); 
        if(!user) res.status(401).json("You can't create an account with this email");
        // 
        const hashedPassword = await bcrypt.hashSync(password, 10); 
        user.password = hashedPassword; 
        // save user here
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json("invalid credentials");
    }
})

router.post('/login', async(req,res) => {
    const {email, password} = req.body;
    try {

    } catch(e){

    }
} )

router.get('/check-email', async(req, res)=> {
    const {email} = req.body
    const isInDb = await studentService.findByEmail(email); 
    res.status(200).send(isInDb)
})

router.get("/:id", async (req, res)=>{
    const studentId = req.params.id;
    const student = await studentService.getStudent(studentId);
    res.status(200).send(student);
})

router.post("/", async (req, res)=>{
    const student = req.body;
    const newStudent = await studentService.createStudent(student);
    res.status(201).send(student);
})

router.put("/:id", async (req, res)=>{
    const studentId = req.params.id;
    const existingStudent = req.body;
    const updatedStudent = await studentService.updateStudent(studentId, existingStudent);
    
    res.status(200).send(updatedStudent);
})

router.delete("/:id", async (req, res)=>{
    const studentId = req.params.id;
    await studentService.removeStudent(studentId);
    res.status(200).send(null);
})

export {router};
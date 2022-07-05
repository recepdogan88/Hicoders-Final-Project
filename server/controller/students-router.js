import express from 'express';
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
        if(!user) return res.status(401).json("You can't create an account with this email");
        // 
        if(user.password != null) return res.status(401).json("User already exists.");
        const hashedPassword = await bcrypt.hash(password, 10); 
         user.password = hashedPassword; 
        // save user here
        console.log(hashedPassword);
        await user.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json("invalid credentials");
    }
})

router.post('/login', async(req,res) => {
    try {
        const {email, password} = req.body;
        const user = await studentService.findByEmail(email); 
        if(!user || user.password === null) return res.status(401).json("Invalid credentials");
            const isSamePassword = await  bcrypt.compare(password,user.dataValues?.password);
            console.log(isSamePassword, password, user.dataValues.password) 
         if(!isSamePassword) return  res.status(401).json("Invalid credentials");
         res.status(200).json(user)
    }
        catch (error) {
            console.log(error.data);
        res.status(401).json("invalid credentials");
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
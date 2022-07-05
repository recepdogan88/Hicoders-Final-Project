import {Result} from "../data/sequelize.js"

export async function getAllResults(){
    return await Result.findAll()
}

export async function addScore(studentId, examId, score){
    return await Result.create({
        UserId: studentId, 
        ExamId: examId, 
        score
    })
}
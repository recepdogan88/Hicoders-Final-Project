import * as resultRepository from "../repositories/result-repository.js"

export async function addResult(userId, examId, score){
    return await resultRepository.addScore(userId, examId, score)
}

export async function getResult(){
    return await resultRepository.getAllResults()
}
import * as examRepository from "../repositories/exam-repository.js"

export async function getExams(){
    return await examRepository.findAll();
}

export async function getExam(examId){
  return await examRepository.findById(examId); 
}
export async function createExam(exam){
  const newExam = await examRepository.add(exam);
  return newExam;
  //.dataValues
}
export async function removeExam(examId){
  return await examRepository.remove(examId);
}
export async function updateExam(examId, existingExam){
  return await examRepository.update(examId, existingExam);
}
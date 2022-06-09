import * as questionRepository from "../repositories/question-repository.js"

export async function getQuestions(query){
    return await questionRepository.findAll(query);
}

export async function getQuestion(questionId){
  return await questionRepository.findById(questionId);
}
export async function createQuestion(student){
  const newQuestion = await questionRepository.add(student);
  return newQuestion
}
export async function removeQuestion(questionId){
  return await questionRepository.remove(questionId);
}
export async function updateQuestion(questionId, existingQuestion){
  return await questionRepository.update(questionId, existingQuestion);
}
import * as studentRepository from "../repositories/student-repository.js"

export async function getStudents(){
    return await studentRepository.findAll();
}

export async function getStudent(studentId){
  return await studentRepository.findById(studentId); 
}
export async function createStudent(student){
  const newStudent = await studentRepository.add(student);
  return newStudent;
  //.dataValues
}
export async function removeStudent(studentId){
  return await studentRepository.remove(studentId);
}
export async function updateStudent(studentId, existingStudent){
  return await studentRepository.update(studentId, existingStudent);
}
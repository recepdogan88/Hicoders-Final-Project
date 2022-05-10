import * as studentRepository from "../repositories/student-repository.js"

export async function getCustomers(){
    return await studentRepository.findAll();
}

export async function getCustomer(studentId){
  return await studentRepository.findById(studentId); 
}
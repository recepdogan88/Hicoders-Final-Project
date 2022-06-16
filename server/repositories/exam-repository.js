import {Exam} from "../data/sequelize.js"

export async function findAll(){
    return await Exam.findAll();
}

export async function findById(pId){
    return await Exam.findByPk(pId);
}

export async function add(pObj){
    await Exam.create(pObj);
}

export async function update(pId, pObj){

    return await Exam.update(pObj, {
        where: {id: pId}
      });
}

export async function remove(pId){
    return await Exam.destroy({
        where: {id: pId}
      });
}
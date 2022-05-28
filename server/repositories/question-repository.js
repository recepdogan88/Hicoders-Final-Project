import {Question} from "../data/sequelize.js"

export async function findAll(){
    return await Question.findAll();
}

export async function findById(pId){
    return await Question.findByPk(pId);
}

export async function add(pObj){
    const student = await Question.create(pObj);
    return student;
}

export async function update(pId, pObj){

    return await Question.update(pObj, {
        where: {id: pId}
      });
}

export async function remove(pId){
    return await Question.destroy({
        where: {id: pId}
      });
}

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
    try {
        await Question.update(pObj, {
            where: {id: pId}
          });
          return await Question.findByPk(pId);
      } catch (e) {
        console.log(e.message);
      }
}

export async function remove(pId){
    return await Question.destroy({
        where: {id: pId}
      });
}

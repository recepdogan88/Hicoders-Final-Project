import {User} from "../data/sequelize.js"

export async function findAllStudents(){
    return await User.findAll({
            where: {
                role: 'student'
            }
    });
}

export async function findByEmail(email){
    return await User.findOne({
        where: {
            email
        }
    });
}
export async function findById(pId){
    return await User.findByPk(pId);
}

export async function add(pObj){
    await User.create(pObj);
}

export async function update(pId, pObj){

    return await User.update(pObj, {
        where: {id: pId}
      });
}

export async function remove(pId){
    return await User.destroy({
        where: {id: pId}
      });
}
import {Question} from "../data/sequelize.js"
import Sequelize from 'sequelize'; 
const Op = Sequelize.Op;
export async function findAll(query=""){
  
      if(!query){
        return await Question.findAll()
      }

      return await Question.findAll({
        where: {                     
          category: {
            [Op.like]: `%${query}%`
          }, 
        }
  	  })
}

export async function findById(pId){
    return await Question.findByPk(pId);
}

export async function add(pObj){
  // const {question, category, answer, option1, option2, option3, option4} = pObj
    const newQuestion = await Question.create(pObj);
    // create the options
    // const questionsBulkArr = [option1,  option2, option3, option4].map(option => ({
    //     option, 
    //     QuestionId: newQuestion.id
    //     })
    //)
   // await Options.bulkCreate(questionsBulkArr)
    return newQuestion;
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

import {Options, Question} from "../data/sequelize.js"

export async function findAll(){
    return await Question.findAll({
        include: Options
    });
}

export async function findById(pId){
    return await Question.findByPk(pId, {
        include: Options
    });
}

export async function add(pObj){
    console.log(pObj);
   const {question, category, answer, option1, option2, option3, option4} = pObj
    const newQuestion = await Question.create({question, answer, category});
    // create the options
    const questionsBulkArr = [option1,  option2, option3, option4].map(option => ({
        option, 
        QuestionId: newQuestion.id
        })
    )
    await Options.bulkCreate(questionsBulkArr)
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

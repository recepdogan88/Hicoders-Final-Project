import { Sequelize, DataTypes } from "sequelize";
import bcrypt from 'bcrypt'; 

const sequelize = new Sequelize("finalproject", "root", "yugo1910", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {},
  define: {
    freezeTableName: true
  }
});

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  lastname: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    allowNull: false, 
    unique: true,
    validate: {
      isEmail: true
    }
  },
  role: DataTypes.STRING,
  password: DataTypes.STRING
},

{
  tableName: 'User'
});

User.prototype.validPassword = async(password, hash) => {
  return await bcrypt.compareSync(password, hash); 
}

const Question = sequelize.define("Question", {
    question: DataTypes.STRING,
    option1: DataTypes.STRING,
    option2: DataTypes.STRING,
    option3: DataTypes.STRING,
    option4: DataTypes.STRING,
    answer: DataTypes.STRING,
    category: DataTypes.STRING,
  },
  {
    tableName: "Question",
  }
);

const Exam = sequelize.define("Exam", {
  examname: DataTypes.STRING,
  start: DataTypes.STRING,
  end: DataTypes.STRING,
},
{
  tableName: "Exam",
}
);

const Result = sequelize.define("Result", {
  score: DataTypes.INTEGER,
},
{
  tableName: "Result",
}
);


User.hasMany(Result);
Exam.hasMany(Result);
Exam.hasMany(Question); 
Question.belongsTo(Exam,  {foreignKey: {
  field: 'ExamId', 
  defaultValue: 2, 
  allowNull: false
}});

await sequelize.sync({ alter: true });

export { User, Question, Exam, Result };


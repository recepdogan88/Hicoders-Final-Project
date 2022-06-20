import { Sequelize, DataTypes } from "sequelize";

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
  email: DataTypes.STRING,
  role: DataTypes.STRING,
}, {
  tableName: 'User'
});





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



await sequelize.sync({ alter: true });

export { User, Question, Exam };


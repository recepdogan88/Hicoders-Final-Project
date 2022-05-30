import { Sequelize , Model, DataTypes} from "sequelize";

const sequelize = new Sequelize("finalproject", "root", "yugo1910", {
    host: "localhost",
    dialect: "mysql",
    dialectOptions: {},
    define: {
      freezeTableName: true
    }
  });

  const Student= sequelize.define("Student", {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
  },{
      tableName: 'Student'
  });
  const Question = sequelize.define(
    "Question",
    {
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
await sequelize.sync({ alter: true });

export {Student,Question};
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
  hooks: {
    beforeCreate: async(user)=>{
      if(user.password){
        const salt = await bcrypt.genSaltSync(10, 'a'); 
        user.password = bcrypt.hashSync(user.password, salt); 
      }
    }, 

    beforeUpdate: async(user)=> {
      if(user.password){
        const salt = await bcrypt.genSaltSync(10, 'a'); 
        user.password = bcrypt.hashSync(user.password, salt); 
      }
    }, 
  },
  instanceMethods: {
    validPassword: (password) => {
      return bcrypt.compareSync(password, this.password)
    }
  },
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



await sequelize.sync({ alter: true });

export { User, Question, Exam };


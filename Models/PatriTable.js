const dbConn = require("../Config/dbConfig");
const Sequelize = require("sequelize");

const Table = dbConn.define("patrimony",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    nPatrimony:{
        type: Sequelize.INTEGER,
        allowNull: false,
        Unique:false,
    },
    image:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    type:{
        type: Sequelize.ENUM("cadeira","projetor","pc","mesa"),
        allowNull: false,
    },
    status:{
        type: Sequelize.ENUM("manutencao","em uso","em falta"),
    }

});

module.exports =  Table;
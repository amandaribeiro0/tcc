const db = require('../Config/dbConfig');
const UserTable = require('../Models/UserTable');
const DepartmentTable = require('../Models/DepTable');
const PatrimonyTable = require('../Models/PatriTable');
const RoomsTable = require('../Models/RoomTable');
const UsersRooms = require('../Models/UsersRooms');
const QrCodeTable = require('../Models/QrCodeTable');
const ImagesPatrimonyTable = require('../Models/ImagesPatrimonyTable');

class Controller{
    static async CreateTable(req,res){
        /*
            #swagger.description = "Migração da estrutura do banco de dados do projeto"
        */
        Controller.DepartmentsRooms();
        Controller.ResponsiblesTable();
        Controller.PatrimonyRoom();
        Controller.PatrimonyImages();
        db.sync({force:false});
        res.send("Banco Criado com sucesso ")
    }

    static DepartmentsRooms(){
        DepartmentTable.hasMany(RoomsTable,{foreignKey:{allowNull:false}});
        RoomsTable.belongsTo(DepartmentTable,{foreignKey:{allowNull:false}});
    }

    static ResponsiblesTable(){
        UserTable.belongsToMany(RoomsTable,{through:UsersRooms});
        RoomsTable.belongsToMany(UserTable,{through:UsersRooms});
    }

    static PatrimonyRoom(){
        RoomsTable.hasMany(PatrimonyTable,{foreignKey:{allowNull:false}});
        PatrimonyTable.belongsTo(RoomsTable,{foreignKey:{allowNull:false}});
    }

    static PatrimonyQrCode(){
        PatrimonyTable.hasOne(QrCodeTable,{foreignKey:{allowNull:false}});
        QrCodeTable.belongsTo(PatrimonyTable,{foreignKey:{allowNull:false}});
    }

    static PatrimonyImages(){
        PatrimonyTable.hasOne(ImagesPatrimonyTable,{foreignKey:{allowNull:false}});
        ImagesPatrimonyTable.belongsTo(PatrimonyTable,{foreignKey:{allowNull:false}});
    }
}

module.exports = Controller;
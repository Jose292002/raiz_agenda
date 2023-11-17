const { DataTypes, Model} = require('sequelize')

const AGENDA_TABLE = "agendas"

const AgendaSchema = {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    hour_start:{
        type:DataTypes.TIME,
        allowNull: false,  
    },
    hour_end:{
        type:DataTypes.TIME,
        allowNull: false
    },
    user_id:{
        type:DataTypes.INTEGER
    },
    place:{
        type: DataTypes.STRING,
        allowNull:false
    },
    status:{
        type: DataTypes.BOOLEAN
    }
}

//Crear clase Usuario que se extiende de modelo
//Aca yo creo las relaciones one to many, many to many.
class Agenda extends Model{
    static associate(models){

    }

    static config(sequelize){
        return{ sequelize, tableName: AGENDA_TABLE, modelName: 'Agenda', timestamps:false}
    }
}

module.exports = {AGENDA_TABLE,AgendaSchema, Agenda}
const { DataTypes, Model } = require('sequelize')

const AREA_TABLE = 'areas'

const AreaSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    observation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}

class Area extends Model {
    static associate(models) {
        this.hasMany(models.User,{as:'users', foreignKey:'area_id'})
    }

    static config(sequelize) {
        return { sequelize, tableName: AREA_TABLE, modelName: 'Area', timestamps: false }
    }
}

module.exports = { AREA_TABLE, AreaSchema, Area }
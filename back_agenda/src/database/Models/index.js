const { User, UserSchema } = require('./user.model')
const { Area, AreaSchema } = require('./area.model')
const { Agenda, AgendaSchema } = require('./agenda.model')

function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize))
    Area.init(AreaSchema, Area.config(sequelize))
    Agenda.init(AgendaSchema, Agenda.config(sequelize))
    User.associate(sequelize.models)
    Area.associate(sequelize.models)
    Agenda.associate(sequelize.models)
}

module.exports = setupModels
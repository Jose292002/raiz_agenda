const {models}=require('./../libs/sequelize')

class AgendaService{
    constructor(){
        this.model = models.Agenda
    }

    async getAll(){
        const agendas = await this.model.findAll()
        return agendas
    }

    async create(date, email, hour_start, hour_end, user_id, place, status){
        const agenda= await this.model.create({date, email, hour_start, hour_end, user_id, place, status})
        return agenda
    }

    async findOne(id){
        const agenda= await this.model.findByPk(id)
        return agenda
    }

    async update(id, values){
        const agenda = await this.findOne(id)
        if(!agenda)return null
        const updateAgenda = await agenda.update(values)
        return updateAgenda
    }

    async delete(id){
        const agenda = await this.findOne(id)
        if(!agenda) return null
        await agenda.destroy()
        return agenda.id
    }
}

module.exports = AgendaService
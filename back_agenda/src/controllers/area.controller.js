const AreaService = require('./../services/area.service')

class AreaController{
    constructor(){
        this.service = new AreaService()
    }

    async index(){
        const areas= await this.service.getAll()
        return areas
    }

    async create(codigo, name, observation, status){
        const area = await this.service.create(codigo, name, observation, status)
        return area
    }

    async findOne(id){
        const area = await this.service.findOne(id)
        if(!area){
            throw new Error('Area no encontrada')
        }
        return area
    }

    async update(id, values){

        const area = await this.service.update(id, values)

        if(!area){
            throw new Error('Area no encontrada')
        }
        return area
    }

    async delete(id){
        const area = await this.service.delete(id)

        if(!area){
            throw new Error('Area no encontrada')
        }
        return area
    }
}

module.exports = AreaController
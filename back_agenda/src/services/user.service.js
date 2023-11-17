const {models}=require('./../libs/sequelize')

class UserService{
    constructor(){
        this.model = models.User
    }

    async getAll(){
        const users = await this.model.findAll({
            include:['area']
        })
        return users 
    }

    async create(name, email, password, status, areaId, area){
        if(areaId && area){
            throw new Error("You cand provide areaId and area on same time")
        }
        const values ={
            name, 
            email,
            password, 
            status
        }
        
        if(areaId){
            values.areaId=areaId
        }

        if(area){
            values.area=area
        }

        const user= await this.model.create(values,{
            include:[{
                association:'area'
            }]
        })
        return user
    }

    async findOne(id){
        const user= await this.model.findByPk(id,{
            include:['area']
        })
        return user
    }

    async update(id, values){
        const user = await this.findOne(id)
        if(!user)return null
        const updateUser = await user.update(values)
        return updateUser
    }

    async delete(id){
        const user = await this.findOne(id)
        if(!user) return null
        await user.destroy()
        return user.id
    }
}

module.exports = UserService
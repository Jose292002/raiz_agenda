const {Router}= require('express')
const AgendaController = require('./../controllers/agenda.controller')

const router = Router()

const controller = new AgendaController()

router.get('/', async(req, res)=>{
    const agendas =await controller.index()
    res.json({agendas})
})

router.post('/', async(req,res)=>{
    const {date, email, hour_start, hour_end, user_id, place, status}=req.body
    const agenda = await controller.create(date, email, hour_start,hour_end,user_id, place, status)
    res.status(201).json({agenda})
})

router.get('/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const agenda= await controller.findOne(id)
        res.status(200).json({agenda})

    } catch (error) {
        res.status(404).json({menssage:error.menssage})
    }
})


router.put('/:id', async(req, res)=>{
    const {id} = req.params
    const {date = '', email = '', hour_start = '', hour_end = '', user_id ='', place = '', status=''} = req.body
    const values = {}
    if(date) values.date = date
    if(email) values.email = email
    if(hour_start) values.hour_start = hour_start
    if(user_id) values.user_id = user_id
    if(place) values.place = place
    if(status) values.status = status

    try{
        const agenda = await controller.update(id, values)
        res.status(200).json({agenda})
    }
    catch(error){
        res.status(404).json({menssage: error.menssage})
    }
})

router.delete('/:id', async(req, res)=>{
    const {id} = req.params

    try {
        const agenda = await controller.delete(id)
        res.status(200).json({agenda})
    } catch (error) {
        res.status(404).json({menssage: error.menssage})
    }
})

module.exports = router
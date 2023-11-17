const {Router}= require('express')
const AreaController = require('./../controllers/area.controller')

const router = Router()

const controller = new AreaController()

router.get('/', async(req, res)=>{
    const areas =await controller.index()
    res.json({areas})
})

router.post('/', async(req,res)=>{
    const {codigo, name, observation, status}=req.body
    const area = await controller.create(codigo, name, observation, status)
    res.status(201).json({area})
})

router.get('/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const area= await controller.findOne(id)
        res.status(200).json({area})

    } catch (error) {
        res.status(404).json({menssage:error.menssage})
    }
})


router.put('/:id', async(req, res)=>{
    const {id} = req.params
    const {codigo = '', name = '', observation = '', status=''} = req.body
    const values = {}
    if(codigo) values.codigo = codigo
    if(name) values.name = name
    if(observtion) values.observation = observation
    if(status) values.status = status

    try{
        const area = await controller.update(id, values)
        res.status(200).json({area})
    }
    catch(error){
        res.status(404).json({menssage: error.menssage})
    }
})

router.delete('/:id', async(req, res)=>{
    const {id} = req.params

    try {
        const area = await controller.delete(id)
        res.status(200).json({area})
    } catch (error) {
        res.status(404).json({menssage: error.menssage})
    }
})

module.exports = router
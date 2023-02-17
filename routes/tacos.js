const router = require('express').Router()
const tacosCtrl = require('../controllers/tacos.js')
router.post('/', tacosCtrl.create)
router.get('/', tacosCtrl.index)
router.put('/:id', tacosCtrl.update)
router.delete('/:id', tacosCtrl.delete)
router.post('/:id/sauce', tacosCtrl.addSauce)



module.exports = router
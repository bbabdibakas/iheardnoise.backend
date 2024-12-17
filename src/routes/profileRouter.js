const Router = require('express')
const router = new Router()
const profileController = require('../controllers/profileController')

router.get('/:id', profileController.getProfileById)

module.exports = router
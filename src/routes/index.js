const Router = require('express')
const router = new Router()
const profileRouter = require('./profileRouter')

router.use('/profile', profileRouter)

module.exports = router
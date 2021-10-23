const router = require('express').Router()

const tsRouter = require('./tensorflow')

router.use('/tensorflow', tsRouter)

module.exports = router
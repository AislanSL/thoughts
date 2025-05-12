const express = require('express')
const router = express.Router()

const ThoughtController = require('../controllers/thoughtController')

router.get('/', ThoughtController.showThoughts)

module.exports = router
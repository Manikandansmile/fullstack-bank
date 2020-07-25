const express = require('express')
const router = express.Router()
const controllerTranslog = require('../controllers/translog.controller')
const auth = require('../middleware/auth')

router.post(
  '/api/transferMoney',
  auth,
  controllerTranslog.transferMoney
)

module.exports = router
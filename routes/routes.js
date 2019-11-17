const express = require('express')
const router = express.Router()
const validator = require('../controllers/validator')

// Check only one IBAN number
router.get('/check/:number', async(req, res) => {
  const { number } = req.params

  try {
    const validated = validator(number)
    if(validated === 1) {
      res.status(200).json({ status: "valid", iban: number })
    }
    else {
      res.status(406).json({ status: "invalid", iban: number })
    }
  } catch(err) {
    res.status(400).json({ error: true, message: err.message })
  }
})

// Check list of IBANs
router.post('/checkList', async(req, res) => {
  const jsonReq = req.body
  try {
    const resultList = []
    Object.values(jsonReq).map(code => {
      let item
      if(validator(code) === 1) {
        item = { status: "valid", iban: code }
      }
      else {
        item = { status: "invalid", iban: code }
      }
      resultList.push(item)
    })
    res.status(200).json({ list: resultList })

  } catch(err) {
    res.status(400).json({ error: true, message: err.message })
  }
})

module.exports = router
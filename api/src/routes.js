const express = require('express')
const Exel = require('./service/Exel')
const path = require('path')
const csv = require('csv-parser')
const fs = require('fs')
const router = express.Router()
router.use(express.json())

// Swagger UI
router.use('/', (req, res, next) => {
  const results = []
  const file = path.join(__dirname, './content/data.csv')
  fs.createReadStream(file, { encoding: 'utf-16le' })
    .pipe(csv({ separator: '\t' }))
    .on('data', (data) => results.push(data))
    .on('end', () => {
      const jsonData = JSON.stringify(results)
      var jsonParsed = JSON.parse(jsonData)
      // const resultFinal = results.map((item) => item['Libcom'])
      console.log(jsonParsed)
    })
})

module.exports = router

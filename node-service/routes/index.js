var express = require('express')
var router = express.Router()
let db = require('../config.db')

/* GET home tabBar. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router

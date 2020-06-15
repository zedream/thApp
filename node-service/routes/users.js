let express = require('express')
let router = express.Router()
let db = require('../db')
let globalData = require('../util/globalData')

router.post('/', function(req, res, next) {
  res.send(req.session)
  // db.query('update user set password="'+ password +'" where username="'+ globalData.username +'"', [], (result, fields) => {
  //   let data = {
  //     code: 0,
  //     msg: '修改成功'
  //   }
  //   res.send(data)
  // })
})


module.exports = router

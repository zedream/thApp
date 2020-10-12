let express = require('express')
let router = express.Router()
let db = require('../db')
let { domain } = require('../util/globalData')

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

router.post('/update', function(req, res, next) {
  let reqData = req.body
  db.query(`update user set name='${reqData.name}', nickname='${reqData.nickname}', avatar='${reqData.avatar}', age=${reqData.age}, gender=${reqData.gender} where account='${req.session.account}'`, [], (result, fields) => {
    db.query(`select * from user where account='${req.session.account}'`, [], (result, fields) => {
      result[0].avatar = `${domain}${result[0].avatar}`
      let data = {
        code: 0,
        msg: '修改成功',
        result: result[0]
      }
      res.send(data)
    })
  })
})


module.exports = router

let express = require('express')
let router = express.Router()
let Jwt = require('../jwt')
let db = require('../db')
let { domain } = require('../util/globalData')

router.post('/login', function(req, res, next) {
  let account = req.body.account
  let password = req.body.password
  db.query('select * from user where account= "'+ account +'"', [], (result, fields) => {
    if (result.length > 0) {
      if (password === result[0].password) {
        // 将用户id传入并生成token
        let jwt = new Jwt(account)
        let token = jwt.generateToken()
        req.session.account = account
        result[0].avatar ? result[0].avatar = `${domain}${result[0].avatar}` : result[0].avatar = null
        let data = {
          result: result[0],
          token: token,
          msg: '登录成功'
        }
        res.send(data)
      } else { // 账密不匹配
        let data = {
          msg: '账号或者密码错误'
        }
        res.status(400).send(data)
      }
    } else { // 账号不存在
      let data = {
        msg: '账号或者密码错误'
      }
      res.status(400).send(data)
    }
  })
})

router.post('/register', function(req, res, next) {
  let account = req.body.account
  let password = req.body.password
  db.query('select * from user where account= "'+ account +'"', [], (result, fields) => {
    if (result.length > 0) { // 账号已存在
      let data = {
        msg: '账号已被注册'
      }
      res.status(400).send(data)
    } else { // 账号不存在
      db.query(`insert into user (account, password, nickname) values ('${account}', '${password}', '${account}')`, [], (result, fields) => {
        let data = {
          msg: '注册成功'
        }
        res.send(data)
      })
    }
  })
})

module.exports = router

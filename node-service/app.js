let createError = require('http-errors')
let express = require('express')
let path = require('path')
let cookieParser = require('cookie-parser')
let logger = require('morgan')
let Jwt = require('./jwt')
let globalData = require('./util/globalData')
let session = require('express-session')

let indexRouter = require('./routes/index')
let loginRouter = require('./routes/login')
let usersRouter = require('./routes/users')
let uploadRouter = require('./routes/upload')
let chatRouter = require('./routes/chat')

let app = express()


app.io = chatRouter.io

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("Content-Type", "application/json;charset=utf-8")
  res.header('Access-Control-Allow-Credentials','true')
  next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  secret:'hello world', // cookie签名 这个属性是必须的 具体配置和`cookie-parser`一样
  saveUninitialized: true, // 是否自动初始化 默认为true
  resave:false, // 当用户session无变化的时候依然自动保存
  cookie:{ // cookie的信息具体操作和`cookie-parser`一样
    maxAge: 1800000 // 30分钟后过期
  },
  rolling: true// 每次请求的时候覆写cookie
}))

app.use((req, res, next) => {
  if (req.url !== '/' && req.url !== '/login' && req.url !== 'upload') {
    let token = req.headers['th-auth'].split(' ')[1]
    let jwt = new Jwt(token)
    let result = jwt.verifyToken()
    // 如果考验通过就next，否则就返回登陆信息不正确
    if (result === 'err') {
        console.log(result)
        res.status(401).send({msg: '请求未授权，请重新登录'})
        // res.render('login.html')
    } else if (result === req.session.account) {
      next()
    } else {
      res.status(401).send({msg: '登录已过期，请重新登录'})
    }
} else {
    next()
  }
})
app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/users', usersRouter)
app.use('/upload', uploadRouter)
app.use('/chat', chatRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app;

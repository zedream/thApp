let express = require('express')
let router = express.Router()
let fs = require('fs')
let uuid = require('node-uuid')
let db = require('../db')
let { resolve } = require('path')
let util = require('../util/util')
let { domain } = require('../util/globalData')


router.post('/upload', function (req, res, next) {
    let imgRes = []
    let end = false
    console.log(req.files)
    for (let item of req.files) {
        fs.readFile(item.path, function (err, data) {
            if(err){
                console.log('Error')
            } else {
                fs.rename(item.path, `${item.destination}/${item.originalname}`, function (err) {
                    if (err) {
                        res.end("重命名错误")
                    }
                    imgRes.push({
                        url: domain + item.originalname,
                        name: item.originalname,
                        size: item.size,
                        id: uuid.v1()
                    })
                    db.query(`insert into files (id, name, type, size, path, account, create_time) values ('${uuid.v1()}', '${item.originalname}', '${item.originalname.split('.')[1]}', ${item.size}, '${item.originalname}', '${req.session.account}', '${util.formatDate(new Date())}')`, [], (result, fields) => {
                        console.log(result)
                    })
                    if (imgRes.length === req.files.length) {
                        end = true
                    }
                    if (end) {
                        res.send({data: imgRes})
                    }
                })
            }
        })
    }
})

router.get('/list', function (req, res, next) {
    let userId = req.session.userid
    let total = 0
    let currentPage = +req.query.currentPage
    let pageSize = +req.query.pageSize
    let name = req.query.name || ''
    let type = req.query.type
    let sql = ''

    if (type) {
        sql = `select * from file where user_id= ${userId} and name like '%${name}%' and type like '${type}' order by create_time desc limit ${(currentPage - 1) * pageSize}, ${currentPage * pageSize}`
    } else {
        sql = `select * from file where user_id= ${userId} and name like '%${name}%' order by create_time desc limit ${(currentPage - 1) * pageSize}, ${currentPage * pageSize}`
    }
    db.query(sql, [], (result, fields) => {
        db.query(`select * from file where user_id= ${userId}`, [], (resultAll, fields) => {
            result.forEach(item => {
                item.create_time = util.formatDate(item.create_time)
                item.size = (item.size / 1024).toFixed(2) < 1000 ? (item.size / 1024).toFixed(2) + 'Kb' : (item.size / 1024 / 1024).toFixed(2) + 'Mb'
            })
            total = resultAll.length
            res.send(Object.assign(global.strategy(0), {data: {result, total, currentPage, pageSize }}))
        })
    })
})

router.post('/delete', function (req, res, next) {
    let id = req.body.id
    let sqlQuery = `select * from file where id= ${id}`
    let sqlDel = `delete from file where id=${id}`
    db.query(sqlQuery, [], (result, fields) => {
        if (result.length > 0) {
            let path = resolve(`../../uploadFiles/${result[0].name}`)
            if (fs.existsSync(path)) {
                db.query(sqlDel, [], (result, fields) => {
                    fs.unlinkSync(path)
                    res.send(Object.assign(global.strategy(0)))
                })
            } else {
                res.status(400).send(Object.assign(global.strategy(500001)))
            }

        } else {
            res.status(400).send(Object.assign(global.strategy(500001)))
        }
    })
})

module.exports = router

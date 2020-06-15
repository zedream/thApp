let express = require('express')
let router = express.Router()
let fs = require('fs')
let formidable = require('formidable')
let path = require('path')
let globalData = require('../util/globalData')
let db = require('../db')
// 引入七牛模块  
let qiniu = require("qiniu")
//要上传的空间名
let bucket = 'th-picture'
// let imageUrl = 'th-picture.s3-cn-south-1.qiniucs.com' // 域名名称
let imageDomain = 'http://q9kx1a1ol.bkt.clouddn.com/'
let accessKey = 'vC6WWRLElnPHTOYmDu6pziaWc9RbfxqTx-VW8H8z'
let secretKey = '4nWcZj7Fvu-rqvfjY_YAvrZ4Fyxs2tQD8sFowv7O'
let mac = new qiniu.auth.digest.Mac(accessKey, secretKey)

let options = {
  scope: bucket,
  deadline: 0
}
let putPolicy = new qiniu.rs.PutPolicy(options)
let uploadToken = putPolicy.uploadToken(mac)

let config = new qiniu.conf.Config()
config.zone = qiniu.zone.Zone_z2
// 图片上传
router.post('/', function(req, res, next){
    let username = globalData.username
    let form = new formidable.IncomingForm()
    form.encoding = 'utf-8' // 编码
    form.keepExtensions = true // 保留扩展名
    form.uploadDir = path.join(__dirname, '../public/images/') // 文件存储路径 最后要注意加 '/' 否则会被存在public下
    form.parse(req, (err, fileds ,files) => { // 解析 formData 数据
        if(err) return next(err) 
        let localPath = files.file.path // 获取文件路径 ~/public/images/<随机生成的文件名>.<扩展名>
        let imgName = files.file.name // 前台上传时的文件名 也就是文件原本的名字
        //let userImgname = imgname.replace(/[^.]+/, username) //把扩展名前的文件名给替换掉
        console.log(files.file)
        let formUploader = new qiniu.form_up.FormUploader(config)
        let putExtra = new qiniu.form_up.PutExtra()
        // 文件上传
        formUploader.putFile(uploadToken, imgName, localPath, putExtra, function(respErr, respBody, respInfo) {
            if (respErr) {
                res.end(JSON.stringify({status:'-1', msg: '上传失败', error: respErr}))
            }
            if (respInfo.statusCode === 200) {
                let imageSrc = imageDomain + respBody.key
                db.query('select * from qiniuFile where file_path="'+ imageSrc +'"', [], (result, fields) => {
                    if (result.length === 0) {
                        db.query('insert into qiniuFile (file_path, file_name) values ("'+ imageSrc +'", "'+ respBody.key +'")', [], (result, fields) => {
                            res.end(JSON.stringify({status:'200', msg:'上传成功', imageSrc: imageSrc, respInfo}))
                        })
                    }
                })
            } else {
                res.end(JSON.stringify({status:'-1', msg:'上传失败', error:JSON.stringify(respBody)}))
            }
            // 上传之后删除本地文件
            fs.unlinkSync(localPath)
        })
    })
})

module.exports = router
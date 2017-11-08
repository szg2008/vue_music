var express = require('express')
var config = require('./config/index')
var axios = require('axios')

var port = process.env.PORT || config.build.port

var app = express()

var apiRoutes = express.Router()

//获取歌词
apiRoutes.get('/lyric',function(req,res){
    var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

    axios.get(url,{
        headers:{
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
        },
        params:req.query
    }).then((response) => {
        var ret = response.data
        if (typeof ret === 'string') {
            var reg = /^\w+\(({[^()]+})\)$///解析jsonp返回的数据格式
            var matches = ret.match(reg)
            if (matches) {
                ret = JSON.parse(matches[1])
            }
        }
        res.json(ret)
    }).catch((e) => {
        console.log(e)
    })
})

//获取推荐歌单列表
apiRoutes.get('/distlist',function(req,res){
    var url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
    axios.get(url,{
        headers:{
            referer: 'https://u.y.qq.com/',
            host: 'u.y.qq.com'
        },
        params:req.query
    }).then((response) => {
        var ret = response.data
        res.json(ret)
    }).catch((e) => {
        console.log(e)
    })
})

//获取歌单列表
apiRoutes.get('/songlist',function(req,res){
    var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
    axios.get(url,{
        headers:{
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
        },
        params:req.query
    }).then((response) => {
        var ret = response.data
        res.json(ret)
    }).catch((e) => {
        console.log(e)
    })
})

app.use('/api', apiRoutes)

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})

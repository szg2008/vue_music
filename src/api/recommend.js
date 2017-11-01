import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'
import axios from 'axios'

export function getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    const data = Object.assign({},commonParams,{
        platform:'h5',
        uin:0,
        needNewCode:1
    })

    return jsonp(url,data,options)
}

export function getDistList() {
    const url = '/api/distlist'

    const data = Object.assign({},commonParams,{
        platform:'yqq',
        needNewCode:0,
        notice:0,
        ct:'24',
        format:'json',
        data:'%7B%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%7D'
    })

    return axios.get(url,{
        params:data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

export function getSongList(contentid) {

    const url = '/api/songlist'

    const data = Object.assign({},commonParams,{
        type:1,
        json:1,
        utf8:1,
        onlysong:0,
        disstid:contentid,
        format:'json',
        g_tk:1756559080,
        hostUin:0,
        inCharset:'utf8',
        outCharset:'utf-8',
        notice:0,
        platform:'yqq',
        needNewCode:0
    })

    return axios.get(url,{
        params:data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

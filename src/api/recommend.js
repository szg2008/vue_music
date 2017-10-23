import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'

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
    const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'

    const data = Object.assign({},commonParams,{
        platform:'yqq',
        needNewCode:0,
        notice:0,
        ct:'24',
        callback:'__jp1',
        data:'%7B%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%7D'
    })

    return jsonp(url,data,options)
}

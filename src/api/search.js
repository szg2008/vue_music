import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'

export function getHotKey(){
    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

    const data = Object.assign({},commonParams,{
        g_tk:'1756559080',
        format:'json',
        platform:'h5',
        needNewCode:1
    })

    return jsonp(url,data,options)
}

export function search(query,page,zhida,perpage) {
    const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

    const data = Object.assign({},commonParams,{
        w:query,
        p:page,
        catZhida:zhida ? 1 : 0,
        g_tk:1756559080,
        format:'jsonp',
        platform:'h5',
        needNewCode:1,
        zhidaqu:1,
        t:0,
        flag:1,
        sem:1,
        aggr:0,
        remoteplace:'txt.mqq.all',
        perpage:perpage || 20,
        n:perpage
    })

    return jsonp(url,data,options)
}

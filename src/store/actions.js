import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'

function findIndex(list,song){
    return list.findIndex((item,index) => {
        return item.id === song.id
    })
}

//点击播放歌曲
export const selectPlay = function({commit,state},{list,index}) {
    commit(types.SET_SEQUENCELIST,list)
    if(state.mode === playMode.random){
        let randomlist = shuffle(list)
        commit(types.SET_PLAYLIST,randomlist)
        index = findIndex(randomlist,list[index])
    }else{
        commit(types.SET_PLAYLIST,list)
    }
    commit(types.SET_CURRENT_INDEX,index)
    commit(types.SET_FULL_SCREEN,true)
    commit(types.SET_PLAYING_STATE,true)
}

//随机播放
export const randomPlay = function({commit},{list}){
    commit(types.SET_MODE,playMode.random)
    commit(types.SET_SEQUENCELIST,list)
    let randomlist = shuffle(list)
    commit(types.SET_PLAYLIST,randomlist)
    commit(types.SET_CURRENT_INDEX,0)
    commit(types.SET_FULL_SCREEN,true)
    commit(types.SET_PLAYING_STATE,true)
}

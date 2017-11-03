import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'

//如果一个动作需要同时修改多个state，则需要action，否则使用mutation

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

//插入歌曲
export const insertSong = function({commit,state},song){
    let playlist = state.playlist
    let sequencelist = state.sequencelist
    let currentIndex = state.currentIndex
    //记录当前歌曲
    let currentSong = playlist[currentIndex]
    //查找当前列表中是否存在待插入的歌曲，饼返回索引
    let fpIndex = findIndex(playlist,song)

    //因为是插入歌曲，所以索引+1
    currentIndex++
    //插入这首歌到当前索引位置
    playlist.splice(currentIndex,0,song)

    //如果已经包含了这首曲
    if(fpIndex > -1){
        //如果当前插入的序号大于列表中的序号
        if(currentIndex > fpIndex){
            playlist.splice(fpIndex,1)
            currentIndex--
        }else{
            playlist.splice(fpIndex + 1,1)
        }
    }

    let currentSIndex = findIndex(sequencelist,currentSong) + 1

    let fsIndex = findIndex(sequencelist,song)

    sequencelist.splice(currentSIndex,0,song)

    if(fsIndex > -1){
        if(currentSIndex > fsIndex){
            sequencelist.splice(fsIndex,1)
        }else{
            sequencelist.splice(fsIndex + 1,1)
        }
    }

    commit(types.SET_PLAYLIST,playlist)
    commit(types.SET_SEQUENCELIST,sequencelist)
    commit(types.SET_CURRENT_INDEX,currentIndex)
    commit(types.SET_FULL_SCREEN,true)
    commit(types.SET_PLAYING_STATE,true)
}

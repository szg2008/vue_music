import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'
import {saveSearch,deleteSearch,clearSearch,savePlay,saveFavorite,deleteFavorite} from 'common/js/cache'

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
    commit(types.SET_MODE,playMode.random)//设置播放模式是随机播放
    commit(types.SET_SEQUENCELIST,list)//顺序列表
    let randomlist = shuffle(list)
    commit(types.SET_PLAYLIST,randomlist)//播放列表
    commit(types.SET_CURRENT_INDEX,0)
    commit(types.SET_FULL_SCREEN,true)
    commit(types.SET_PLAYING_STATE,true)
}

//插入歌曲
export const insertSong = function({commit,state},song){
    let playlist = state.playlist.slice()
    let sequencelist = state.sequencelist.slice()
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

export const saveSearchHistory = function({commit},query){
    commit(types.SET_SEARCHHISTORY,saveSearch(query))
}

export const deleteSearchHistory = function({commit},query){
    commit(types.SET_SEARCHHISTORY,deleteSearch(query))
}

export const clearSearchHistory = function ({commit}) {
  commit(types.SET_SEARCHHISTORY, clearSearch())
}

//从歌曲列表中删除歌曲
export const deleteSong = function({commit,state},song){
    let playlist = state.playlist.slice()
    let sequencelist = state.sequencelist.slice()
    let currentIndex = state.currentIndex
    let pIndex = findIndex(playlist,song)
    playlist.splice(pIndex,1)
    let sIndex = findIndex(sequencelist,song)
    sequencelist.splice(sIndex,1)
    if(currentIndex > pIndex || currentIndex === playlist.length){
        currentIndex--
    }

    commit(types.SET_PLAYLIST,playlist)
    commit(types.SET_SEQUENCELIST,sequencelist)
    commit(types.SET_CURRENT_INDEX,currentIndex)

    const playingState = playlist.length > 0

    commit(types.SET_PLAYING_STATE,playingState)//如果当前列表为空，设置歌曲为关闭状态

}

export const deleteSongList = function({commit}){
    commit(types.SET_PLAYLIST,[])
    commit(types.SET_SEQUENCELIST,[])
    commit(types.SET_CURRENT_INDEX,-1)
    commit(types.SET_PLAYING_STATE,false)
}

//播放历史
export const savePlayHistory = function({commit},song){
    commit(types.SET_PLAYHISTORY,savePlay(song))

}

//喜欢的
export const saveFavoriteList = function({commit},song){
    commit(types.SET_FAVORITE_LIST,saveFavorite(song))
}

export const deleteFavoriteList = function({commit},song){
    commit(types.SET_FAVORITE_LIST,deleteFavorite(song))
}

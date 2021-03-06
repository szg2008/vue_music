import * as types from './mutation-types'

const mutations = {
    [types.SET_SINGER](state,singer){
        state.singer = singer
    },
    [types.SET_PLAYING_STATE](state,flag){
        state.playing = flag
    },
    [types.SET_FULL_SCREEN](state,flag){
        state.fullScreen = flag
    },
    [types.SET_PLAYLIST](state,list){
        state.playlist = list
    },
    [types.SET_SEQUENCELIST](state,list){
        state.sequencelist = list
    },
    [types.SET_MODE](state,mode){
        state.mode = mode
    },
    [types.SET_CURRENT_INDEX](state,index){
        state.currentIndex = index
    },
    [types.SET_DISC](state,disc){
        state.disc = disc
    },
    [types.SET_TOP_LIST](state,toplist){
        state.toplist = toplist
    },
    [types.SET_SEARCHHISTORY](state,history){
        state.searchHistory = history
    },
    [types.SET_PLAYHISTORY](state,history){
        state.playHistory = history
    },
    [types.SET_FAVORITE_LIST](state,favorite){
        state.favoriteList = favorite
    }
}

export default mutations

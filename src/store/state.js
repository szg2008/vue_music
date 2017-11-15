import {playMode} from 'common/js/config'
import {loadSearch,loadPlay,loadFavorite} from 'common/js/cache'
const state = {
    singer:{},
    playing:false,
    fullScreen:false,
    playlist:[],
    sequencelist:[],//当播放模式不同时，playlist和sequencelist不一样
    mode:playMode['sequence'],
    currentIndex:-1,
    dist:{},
    toplist:[],
    searchHistory:loadSearch(),
    playHistory:loadPlay(),
    favoriteList:loadFavorite()
}

export default state

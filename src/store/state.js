import {playMode} from 'common/js/config'
import {loadSearch,loadPlay,loadFavorite} from 'common/js/cache'
const state = {
    singer:{},
    playing:false,
    fullScreen:false,
    playlist:[],//播放列表
    sequencelist:[],//歌单列表
    mode:playMode['sequence'],
    currentIndex:-1,
    dist:{},
    toplist:[],
    searchHistory:loadSearch(),
    playHistory:loadPlay(),
    favoriteList:loadFavorite()
}

export default state

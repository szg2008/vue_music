import {playMode} from 'common/js/config'
import {loadSearch} from 'common/js/cache'
const state = {
    singer:{},
    playing:false,
    fullScreen:false,
    playlist:[],
    sequencelist:[],
    mode:playMode['sequence'],
    currentIndex:-1,
    dist:{},
    toplist:[],
    searchHistory:loadSearch()
}

export default state

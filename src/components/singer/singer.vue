<template lang="html">
    <div class="singer" ref='singer'>
        <list-view :data="singer" @select="selectSinger" ref="list"></list-view>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript6">
import {getSingerList} from 'api/singer'
import {ERR_OK} from 'api/config'
import Singer from 'common/js/singer'
import ListView from 'base/listview/listview'
import {mapMutations} from 'vuex'
import {playlistMixin} from 'common/js/mixin'

const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10
export default {
    mixins:[playlistMixin],//将代码merge到这个文件中
    data(){
        return {
            singer:[]
        }
    },
    components:{
        ListView
    },
    mounted(){
        this.$nextTick(() => {
            this._getSingerList()
        })
    },
    methods:{
        selectSinger(singer){
            this.$router.push({
                path:`/singer/${singer.id}`
            })
            this.setSinger(singer)
        },
        async _getSingerList(){
            const result = await getSingerList()
            if(result.code === ERR_OK){
                this.singer = result.data.list
            }
            this.singer = this._normalizeSinger(this.singer)
        },
        handlePlaylist(playlist){//mixin
            const bottom = playlist.length > 0 ? '60px' : ''
            this.$refs.singer.style.bottom = bottom
            this.$refs.list.refresh()
        },
        _normalizeSinger(list) {
            let map = {
                hot:{
                    title:HOT_NAME,
                    items:[]
                }
            }
            list.forEach((item,index) =>{
                if(index < HOT_SINGER_LEN){
                    map.hot.items.push(new Singer({
                        id:item.Fsinger_mid,
                        name:item.Fsinger_name
                    }))
                }
                const key = item.Findex
                if(!map[key]){
                    map[key] = {
                        title:key,
                        items:[]
                    }
                }
                map[key].items.push(new Singer({
                    id:item.Fsinger_mid,
                    name:item.Fsinger_name
                }))
            })
            //得到有序列表，需要进一步处理map
            let hot = []
            let ret = []
            for(let key in map){
                let val = map[key]
                if(val.title.match(/[a-zA-Z]/)){
                    ret.push(val)
                }else if(val.title === HOT_NAME){
                    hot.push(val)
                }
            }
            ret.sort((a,b) => {
                return a.title.charCodeAt(0) - b.title.charCodeAt(0)
            })

            return hot.concat(ret)
        },
        ...mapMutations({
            setSinger:'SET_SINGER'
        })
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .singer
        position:fixed
        top:88px
        bottom:0
        left:0
        width:100%
</style>

<template lang="html">
    <transition name="slide">
        <music-list
            :title="title"
            :bg-image="bgImage"
            :songs="songs"
            :rank="rank"
        ></music-list>
    </transition>
</template>

<script type="text/ecmascript-6">
import MusicList from 'components/music-list/music-list'
import {mapGetters} from 'vuex'
import {getMusicList} from 'api/rank'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song.js'
export default {
    created(){
        this._getMusicList()
    },
    methods:{
        async _getMusicList(){
            if(!this.toplist.id){
                this.$router.push('/rank')
                return
            }
            const result = await getMusicList(this.toplist.id)
            if(result.code === ERR_OK){
                this.songs = this._normalizeSongs(result.songlist)
            }
        },
        _normalizeSongs(list){
            let ret = []
            list.forEach((item,index) => {
                const musicData = item.data
                if(musicData.songid && musicData.albumid){
                    ret.push(createSong(musicData))
                }
            })

            return ret
        }
    },
    data(){
        return {
            songs:[],
            rank:true
        }
    },
    computed:{
        title(){
            return this.toplist.topTitle
        },
        bgImage(){
            if(this.songs.length){
                return this.songs[0].image
            }
            return ''
        },
        ...mapGetters([
            'toplist'
        ])
    },
    components:{
        MusicList
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
        transition: all 0.3s ease

  .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)
</style>

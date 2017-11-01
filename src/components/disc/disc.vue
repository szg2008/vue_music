<template lang="html">
    <transition name="slide">
        <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
    </transition>
</template>

<script type="text/ecmascript-6">
import MusicList from 'components/music-list/music-list'
import {mapGetters} from 'vuex'
import {getSongList} from 'api/recommend'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song'
export default {
    computed:{
        title(){
            return this.disc.title
        },
        bgImage(){
            return this.disc.cover
        },
        ...mapGetters([
            'disc'
        ])
    },
    data(){
        return {
            songs:[]
        }
    },
    methods:{
        async _getSongList(){
            if(!this.disc.content_id){
                this.$router.push('/recommend')
                return
            }
            const result = await getSongList(this.disc.content_id)
            if(result.code === ERR_OK){
                this.songs = this._normalizeSongs(result.cdlist[0].songlist)
            }
        },
        _normalizeSongs(list){
            let ret = []
            list.forEach((musicData,index) => {
                if(musicData.songid && musicData.albumid){
                    ret.push(createSong(musicData))
                }
            })
            return ret
        }
    },
    components:{
        MusicList
    },
    created() {
        this._getSongList()
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .slide-enter-active,.slide-leave-active
        transition:all .3s
    .slide-enter,.slide-leave-to
        transfrom:translate3d(100%,0,0)
</style>

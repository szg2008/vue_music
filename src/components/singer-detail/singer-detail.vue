<template lang="html">
    <transition name="slide">
        <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
    </transition>
</template>

<script type="text/ecmascript6">
import {mapGetters} from 'vuex'
import {getSingerDetail} from 'api/singer'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song'
import MusicList from 'components/music-list/music-list'
export default {
    computed:{
        title(){
            return this.singer.name
        },
        bgImage(){
            return this.singer.avatar
        },
        ...mapGetters([
            'singer'
        ])
    },
    data(){
        return {
            songs:[]
        }
    },
    components:{
        MusicList
    },
    methods:{
        async _getSingerDetail(singerId){
            //不能在当前页面直接刷新
            if(!this.singer.id){
                this.$router.push('/singer')
                return
            }
            const result = await getSingerDetail(singerId)
            if(result.code === ERR_OK){
                this.songs = this._normalizeSongs(result.data.list)
            }
        },
        _normalizeSongs(list){
            let ret = []
            list.forEach((item,index) => {
                let {musicData} = item
                if(musicData.songid && musicData.albummid){
                    ret.push(createSong(musicData))
                }
            })

            return ret
        }
    },
    created(){
        this._getSingerDetail(this.singer.id)
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/variable'
    .slide-enter-active,.slide-leave-active
        transition:all 0.3s
    .slide-enter,.slide-leave-to
        transform:translate3d(100%,0,0)

</style>

<template lang="html">
    <div class="recommend" ref="recommend">
        <scroll class="recommend-content" :data="distList" ref="scroll">
            <div>
                <div class="slider-wrapper" v-if="recommends.length">
                    <slider>
                        <div v-for="item in recommends">
                            <a :href="item.linkUrl">
                                <!--fastclick不会拦截类名为needsclick的事件-->
                                <img :src="item.picUrl" @load="loadImage" class="needsclick"/>
                            </a>
                        </div>
                    </slider>
                </div>
                <div class="recommend-list">
                    <h1 class="list-title">热门歌单推荐</h1>
                    <ul class="list">
                        <li v-for="item in distList" class="item" @click='selectItem(item)'>
                            <div class="icon">
                                <img alt="" width=60 height=60 v-lazy="item.cover"/>
                            </div>
                            <div class="text">
                                <h2 class="name">{{item.title}}</h2>
                                <p class="desc">
                                    {{item.rcmdcontent}}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loading-container" v-show="!distList.length">
                <loading></loading>
            </div>
        </scroll>
        <router-view></router-view>
    </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import Slider from 'base/slider/slider'
import Loading from 'base/loading/loading'
import {getRecommend,getDistList} from 'api/recommend'
import {ERR_OK} from 'api/config'
import {playlistMixin} from 'common/js/mixin'
import {mapMutations} from 'vuex'

export default {
    mixins:[playlistMixin],//将代码merge到这个文件中
    data(){
        return {
            recommends:[],
            distList :[],
            checkLoaded:false
        }
    },
    created(){
        this._getRecomend()

        this._getDistList()
    },
    methods:{
        async _getRecomend(){
            const result = await getRecommend()
            this.recommends = result.data.slider
        },
        async _getDistList(){
            const result = await getDistList()
            this.distList = result.recomPlaylist.data.v_hot
        },
        loadImage() {
            if(!this.checkLoaded){
                this.$refs.scroll.refresh()
                this.checkLoaded = true
            }
        },
        handlePlaylist(playlist){//mixin
            const bottom = playlist.length > 0 ? '60px' : ''
            this.$refs.recommend.style.bottom = bottom
            this.$refs.scroll.refresh()
        },
        selectItem(item){
            this.setDisc(item)
            this.$router.push({
                path:`/recommend/${item.content_id}`
            })
        },
        ...mapMutations({
            setDisc:'SET_DISC'
        }),
    },
    components:{
        Slider,
        Scroll,
        Loading
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/variable"
.recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
        height: 100%
        overflow: hidden
        .slider-wrapper
            position: relative
            width: 100%
            overflow: hidden
        .recommend-list
            .list-title
                height: 65px
                line-height: 65px
                text-align: center
                font-size: $font-size-medium
                color: $color-theme
            .item
                display: flex
                box-sizing: border-box
                align-items: center
                padding: 0 20px 20px 20px
                .icon
                    flex: 0 0 60px
                    width: 60px
                    padding-right: 20px
                .text
                    display: flex
                    flex-direction: column
                    justify-content: center
                    flex: 1
                    line-height: 20px
                    overflow: hidden
                    font-size: $font-size-medium
                    .name
                        margin-bottom: 10px
                        color: $color-text
                    .desc
                        color: $color-text-d
        .loading-container
            position: absolute
            width: 100%
            top: 50%
            transform: translateY(-50%)
</style>

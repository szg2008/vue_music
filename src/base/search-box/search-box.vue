<template lang="html">
    <div class="search-box">
        <i class="icon-box"></i>
        <input ref="query" type="text" name="" value="" class="box" :placeholder="placeholder" v-model="query">
        <i class="icon-dismiss" v-show="query" @click="clear"></i>
    </div>
</template>

<script>
import {debounce} from 'common/js/util'
export default {
    props:{
        placeholder:{
            type:String,
            default:'搜素歌曲、歌手'
        }
    },
    data(){
        return {
            query:''
        }
    },
    methods:{
        clear(){
            this.query = ''
        },
        setQuery(query){//向外暴露一个方法以供调用
            this.query = query
        },
        blur(){//对外方法
            this.$refs.query.blur()
        }
    },
    created(){
        //可以直接写成watch
        //做一个节流处理
        this.$watch('query',debounce((newQuery) => {
            this.$emit('query',newQuery)//对外派发一个事件
        },200))
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable'
.search-box
    display: flex
    align-items: center
    box-sizing: border-box
    width: 100%
    padding: 0 6px
    height: 40px
    background: $color-highlight-background
    border-radius: 6px
    .icon-search
        font-size: 24px
        color: $color-background
    .box
        flex: 1
        margin: 0 5px
        line-height: 18px
        background: $color-highlight-background
        color: $color-text
        font-size: $font-size-medium
        outline:none
        &::placeholder
            color: $color-text-d
    .icon-dismiss
        font-size: 16px
        color: $color-background
</style>

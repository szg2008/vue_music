<template lang="html">
    <div class="" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:{
        probeType:{
            type:Number,
            default:1
        },
        click:{
            type:Boolean,
            default:true
        },
        data:{
            type:Array,
            default:null
        },
        listenScroll:{//是否监听滚动的变化
            type:Boolean,
            default:false
        },
        pullUp:{//是否监听上拉刷新
            type:Boolean,
            default:false
        },
        beforeScroll:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        this.$nextTick(() => {
            this._initScroll()
        })
    },
    methods:{
        _initScroll(){
            if(!this.$refs.wrapper) return
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType:this.probeType,
                click:this.click
            })

            if(this.listenScroll){
                let me = this
                this.scroll.on('scroll',(pos) =>{
                    me.$emit('scroll',pos)
                })
            }

            if(this.pullUp){
                this.scroll.on('scrollEnd',() => {
                    if(this.scroll.y <= (this.scroll.maxScrollY + 50)){
                        this.$emit('scrollToEnd')//已经滚动到底部
                    }
                })
            }

            if(this.beforeScroll){
                this.scroll.on('beforeScrollStart',() => {
                    this.$emit('beforeScroll')
                })
            }
        },
        enable(){
            this.scroll && this.scroll.enable()
        },
        disable(){
            this.scroll && this.scroll.disable()
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        scrollTo(){
            this.scroll && this.scroll.scrollTo.apply(this.scroll,arguments)
        },
        scrollToElement(){
            this.scroll && this.scroll.scrollToElement.apply(this.scroll,arguments)

        }
    },
    watch:{
        data(){//监听数据的变化
            setTimeout(() => {
                this.refresh()
            }, 20)
        }
    }
}
</script>

<style lang="stylus">
</style>

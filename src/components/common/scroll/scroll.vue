<template>

    <div class="scroll" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "scroll",
        props: {
            probeType: {
                type: Number,
                default: 1
            },
            data: {
                type: Array,
                default: () => {
                    return []
                }
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll: null,
                message: "我是scroll 的消息"
            }
        },
        methods: {
            __initScroll() {
                // 1.初始化BScroll对象
                if (!this.$refs.wrapper) return;
                this.scroll = new BScroll(this.$refs.wrapper, {
                    probeType: this.probeType,
                    click: true,
                    pullUpLoad: this.pullUpLoad
                });

                // 2.将监听滚动事件回调
                this.scroll.on('scroll', pos => {
                    this.$emit('scroll', pos)
                });

                // 3.监听上拉到底部
                this.scroll.on('pullingUp', () => {
                    window.console.log('上拉加载');
                    this.$emit('pullingUp')
                })
            },
            // 跳转位置
            scrollTo(x, y, timeout = 500) {
                this.scroll.scrollTo(x, y, timeout)
            },
            // 数据加载完毕 需要触发此事件 才能第二次加载
            finishPullUp() {
                this.scroll.finishPullUp()
            },
            // 重新计算滚动高度
            refresh() {
                this.scroll.refresh()
            }
        },
        mounted() {
            this.__initScroll()
        },
        watch: {
            data() {
                setTimeout(this.refresh, 20)
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="HomeSwiper">
        <swiper ref="swiper" v-if="banners.length">
            <swiper-item v-for="(item, index) in banners" :key="index">
                <a :href="item.link" class="img-width">
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import {Swiper, SwiperItem} from '@/components/common/swiper'
    export default {
        name: "HomeSwiper",
        props:{
            banners: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {

            }
        },
        components:{
            Swiper,
            SwiperItem
        },
        methods:{
            stopTimer() {
                this.$refs.swiper.stopTimer()
            },
            startTimer() {
                if (this.$refs.swiper) {
                    this.$refs.swiper.startTimer()
                }
            }
        }
    }
</script>

<style scoped>
    .img-width{
        width: 100%;
        height: 360px;
    }
    .img-width img{
        height: 100%;
        width: 100%;
    }

</style>

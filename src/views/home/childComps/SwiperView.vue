<template>

    <div class="SwiperView" v-if="banners.length">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(item, index) in banners" :key="index">
                <a :href="item.link" class="img-width">
                    <img :src="item.image" alt="">
                </a>
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "SwiperView",
        props:{
            banners: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                swiperOption: {
                    height: 360,
                    speed: 500,//切换速度
                    watchOverflow: true, //当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航等。默认不开启这个功能。
                    loop: true,//开启循环模式
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
        components: {
            Swiper,
            SwiperSlide
        },
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

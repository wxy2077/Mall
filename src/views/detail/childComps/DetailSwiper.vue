<template>

    <div class="detailSwiper">
        <swiper v-if="banners.length !== -1">
            <SwiperItem v-for="(item,index) in banners" :key="index">
                <div class="swiperImg">
                    <img :src="item">
                </div>
            </SwiperItem>
        </swiper>
    </div>

</template>

<script>
    import {Swiper, SwiperItem} from '@/components/common/swiper'

    export default {
        name: "DetailSwiper",
        props:{
            banners: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {}
        },
        components:{
            Swiper,
            SwiperItem,
        }
    }
</script>

<style scoped>
    .swiperImg{
        height: 300px;
    }
    .swiperImg img{
        height: 450px;
        width: 100%;
    }

</style>

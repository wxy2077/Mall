<template>
    <div>
        <detail-tab-bar class="tab-bar"/>
        <!--<div class="replace-space"></div>-->
        <detail-swiper :banners="banners" />

        <!-- TODO(得在拆分 baseinfo信息) -->
        <base-info />

    </div>
</template>

<script>
    import DetailTabBar from './childComps/DetailTabBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import BaseInfo from './childComps/BaseInfo'

    export default {
        name: 'Detail',
        data() {
            return {
                banners: [

                    {
                        "link": "#",
                        "image": "https://s11.mogucdn.com/mlcdn/c45406/170919_6h807cjg6c6e065kkalf9gh620aj7_640x960.jpg_640x960.v1cAC.70.webp"
                    },
                    {
                        "link": "#",
                        "image": "https://s5.mogucdn.com/mlcdn/c45406/170919_30a5je68053hf31h24610gedbk64h_640x960.jpg_640x960.v1cAC.70.webp"
                    },
                    {
                        "link": "#",
                        "image": "https://s5.mogucdn.com/mlcdn/c45406/170919_6h996g6jjd1j226kl3f553986347c_640x960.jpg_640x960.v1cAC.70.webp"
                    },
                    {
                        "link": "#",
                        "image": "https://s5.mogucdn.com/mlcdn/c45406/170919_6fkag39hdd5j4ffaeek99hg4g203g_640x960.jpg_640x960.v1cAC.70.webp",
                    }

                ],
            }
        },
        components: {
            DetailTabBar,
            DetailSwiper,
            BaseInfo,
        }
    }
</script>

<style scoped>
    /*.tab-bar{*/
        /*position: fixed;*/
        /*top: 0;*/
        /*left: 0;*/
        /*right: 0;*/
        /*z-index: 9;*/
        /*background-color: #fff;*/
    /*}*/
    /*.replace-space{*/
        /*height: 43px;*/
        /*background-color: #fff;*/
        /*z-index: 9;*/
    /*}*/

</style>

<template>

    <div class="TabView">
        <div class="tab-item">
            <img :src='require("@/assets/img/common/vip.svg")'/>
            <div class="desc">
                我的会员
            </div>
        </div>
        <a href="https://github.com/CoderCharm/Mall" target="_blank">
            <div class="tab-item">
                <img :src='require("@/assets/img/common/GitHub.svg")'/>
                <div class="desc">
                    此项目Github地址
                </div>
            </div>
        </a>
        <a href="https://www.charmcode.cn/" target="_blank">
        <div class="tab-item">
            <img :src='require("@/assets/img/common/code.svg")'/>
            <div class="desc">
                我的个人站点
            </div>
        </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "TabView",
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .TabView {
        width: 95%;
        border-radius: 10px;
        margin: 10px auto;
        font-weight: 500;
        background-color: #f6f6f6;
        padding: 10px 10px 0 10px;

    }

    .tab-item {
        display: flex;
        padding-bottom: 10px;
        align-items: center;
    }

    .tab-item img {
        width: 25px;
        height: 25px;
        position: relative;
        top: -5px;
    }

    .desc {
        margin-left: 10px;
        padding-bottom: 5px;
        width: 100%;
        border-bottom: 1px solid #E0E0E0;
    }

</style>

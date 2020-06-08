<template>

    <div class="BackTop">
        <img :src="backTopImg"/>
    </div>
</template>

<script>
    export default {
        name: "BackTop",
        data() {
            return {
                backTopImg: require("@/assets/img/common/top.svg"),
            }
        }
    }
</script>

<style scoped>
    .BackTop{
        position: fixed;
        right: 10px;
        bottom: 60px;
        background-color: #ffffff;
        border-radius: 50%;
    }
    .BackTop img {
        width: 30px;
        height: 30px;
    }
</style>

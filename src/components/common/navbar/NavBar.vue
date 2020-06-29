<template>
    <div class="nav-bar">
        <div class="nav-left"><slot name="left"></slot></div>
        <div class="nav-center"><slot name="center"></slot></div>
        <div class="nav-right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height: 43px;
        background-color: var(--color-tint);
        color: #fff;
        line-height: 43px;
        text-align: center;
    }
    .nav-center{
        flex: 1;
        font-size: 16px;

    }
    .nav-left, .nav-right{
        width: 50px;
        /*background-color: pink;*/
    }


</style>

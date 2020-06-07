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
        height: 0.9rem;
        background-color: var(--color-tint);
        color: #fff;
    }
    .nav-center{
        flex: 1;
    }
    .nav-left, .nav-right{
        width: 0.9rem;
        background-color: pink;
    }


</style>
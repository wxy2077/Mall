<template>
    <div>
        <nav-bar></nav-bar>

    </div>
</template>

<script>
    import NavBar from '@/components/common/navbar/NavBar'
    export default {
        name: 'Home',
        data() {
            return {}
        },
        methods: {
        },
        components: {
            NavBar,
        }
    }
</script>

<style scoped>
    button{
        margin: 10px;
    }

</style>
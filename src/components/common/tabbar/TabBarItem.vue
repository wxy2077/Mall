<template>
    <div class="tab-bar-item" @click="itemClick">

        <div class="item-active-icon" v-show="isActive">
            <slot name="active-icon"></slot>
        </div>

        <div class="item-icon" v-show="!isActive">
            <slot name="icon"></slot>
        </div>

        <div class="item" :style="activeStyle">
            <slot name="text"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'TabBarItem',
        props: {
            path: {
                type: String,
            },
        },
        data() {
            return {

            }
        },
        methods: {
            itemClick() {
                window.console.log(this.isActive);
                if (this.$route.path.indexOf(this.path) === -1) {
                    this.$router.replace(this.path)
                }
            },
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle() {
                return this.isActive ? {'color': '#ff5777'} : {}
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        /* 一般情况tab-bar高度49 */
        font-size: 14px;
        height: 49px;
        color: #bfbfbf;
        background-color: #f6f6f6;
    }
    .item-icon img, .item-active-icon img {
        width: 24px;
        height: 24px;
        margin-top: 5px;
        vertical-align: middle;
    }

</style>

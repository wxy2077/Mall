<template>
    <div class="Toast"
         :class="type"
         v-if="showToast">
        <span class="icon">
            <img :src="iconSrc"/>
        </span>
        {{ message }}
    </div>
</template>

<script>
    /**
     * 自己封装的Toast v0.1
     * params: showToast Boolean 是否激活toast 默认 false
     * params: type String       toast提示类型 共normal success，fail，warning 四个选项 默认normal
     * params: message String    toast消息
     * params: delay Number      toast显示时间 默认 3000ms
     * */
    export default {
        name: "Toast",
        props: {
            showToast: {
                // 激活
                type: Boolean,
                default: false
            },
            type: {
                // 三种弹窗提示类型
                type: String,
                default: "normal"
            },
            message: {
                type: String,
                required: true
            },
            delay: {
                type: Number,
                default: 3000
            }
        },
        data() {
            return {
            }
        },
        methods: {
            // Toast消失
            disappear() {
                if (this.showToast) {
                    setTimeout(() => {
                        this.$emit("disappear");
                    }, this.delay)
                }
            },
        },
        watch: {
            showToast() {
                this.disappear()
            },
        },
        computed: {
            iconSrc() {
                let tipType = ["normal", "success", "warning", "fail"];
                if (tipType.includes(this.type)) {
                    return require(`@/assets/img/common/${this.type}.svg`)
                } else {
                    throw "Toast type数据只允许为 normal, success, warning, fail 四种其中的一种，默认为normal"
                }
            }
        },


    }
</script>

<style scoped>
    .Toast {
        position: fixed;
        left: 50%;
        top: 50%;
        background: rgb(233, 233, 235);
        padding: 10px;
        border-radius: 5px;
        transform: translate(-50%, -50%);
        animation: show-toast .2s;
        color: #909399;
        overflow: hidden;
        display: flex;
        align-items: center;
    }

    @keyframes show-toast {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;

        }
    }

    .success {
        color: #67C23A;
        background: rgb(225, 243, 216);
    }

    .warning {
        color: #E6A23C;
        background: rgb(250, 236, 216);
    }

    .fail {
        color: #F56C6C;
        background: rgb(253, 226, 226);
    }

    .icon img {
        width: 20px;
        height: 20px;
        margin-top: 3px;
        margin-right: 4px;
    }
</style>

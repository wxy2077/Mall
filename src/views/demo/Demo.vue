<template>
    <div id="demo">
        <h1>Vuex练习学习</h1>

        <h3>显示: {{ $store.state.counter }} </h3>

        <button @click="$store.commit('increment', 'aaa')">点击+</button>

        <button @click="decrement">点击-</button>

        <h4>{{ $store.state.info }}</h4>

        <button @click="addInfo()"> 追加信息</button>
        <button @click="delInfo()"> 删除信息</button>

        <p>
            <button @click="asyncChanegName()"> 延时2s异步更改名字</button>
        </p>
        <p>当前请求: {{ currentPage }}</p>
        <button @click="btnClick">防抖函数按钮</button>
    </div>
</template>

<script>
    export default {
        name: 'Demo',
        data() {
            return {
                currentPage: 0
            }
        },
        methods: {
            decrement() {
                this.$store.commit({
                    type: "decrement", // type 固定写法 对应store mutations 里面的回调方法名
                    myAbc: "aaaa"
                })
            },
            addInfo() {
                this.$store.commit("addInfo", "孙悟饭")
            },
            delInfo() {
                this.$store.commit("delInfo", "son")
            },
            asyncChanegName() {
                // 使用 actions 异步修改
                this.$store.dispatch("aModify", "孙悟空")
            },
            btnClick() {
                window.console.log("点击了");
                this.debounce(this.pageAdd, 3000)
            },
            pageAdd() {
                window.console.log("页面+1")
                this.currentPage += 1
            },
            // 防抖函数
            debounce(func, delay) {
                let timer = null;
                return function () {
                    let context = this;
                    if (timer) clearTimeout(timer);
                    timer = setTimeout(() => {
                        func.apply(context)
                    }, delay)
                }

            }
        },
    }
</script>

<style scoped>
    button {
        margin: 10px;
    }

</style>

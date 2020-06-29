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

    import {debounce} from '../../utils/public.js'

    export default {
        name: 'Demo',
        data() {
            return {
                currentPage: 0
            }
        },
        created(){
            // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
            // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
            // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
            // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
            // 请参考：https://lodash.com/docs#debounce 需要导入安装
            // this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
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
                debounce(function () {
                    this.currentPage +=1
                },2000);
                // window.console.log(this.currentPage)
            },
            pageAdd() {
                window.console.log("页面+1");
                this.currentPage += 1
            },
            // 防抖函数
            debounce(func, delay) {
                var timer = null;
                return function () {
                    var context = this;
                    if (timer) {
                        window.console.log("清除定时器");
                        clearTimeout(timer)
                    }

                    timer = setTimeout(() => {
                        func.apply(context)
                    }, delay)
                }
            },


        },
    }
</script>

<style scoped>
    button {
        margin: 10px;
    }

</style>

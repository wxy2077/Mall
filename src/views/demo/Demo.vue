<template>
    <div id="demo">
        <h1>Vuex练习学习</h1>

        <h3>显示: {{ $store.state.counter }} </h3>

        <button @click="$store.commit('increment', 'aaa')">点击+</button>

        <button @click="decrement">点击-</button>

        <h4>{{ $store.state.info }}</h4>

        <button @click="addInfo()"> 追加信息 </button>
        <button @click="delInfo()"> 删除信息 </button>

        <p><button @click="asyncChanegName()"> 延时2s异步更改名字</button></p>
    </div>
</template>

<script>
    export default {
        name: 'Demo',
        data() {
            return {}
        },
        methods: {
            decrement(){
                this.$store.commit({
                    type: "decrement", // type 固定写法 对应store mutations 里面的回调方法名
                    myAbc: "aaaa"
                })
            },
            addInfo(){
                this.$store.commit("addInfo", "孙悟饭")
            },
            delInfo(){
                this.$store.commit("delInfo", "son")
            },
            asyncChanegName(){
                // 使用 actions 异步修改
                this.$store.dispatch("aModify", "孙悟空")
            }


        },
    }
</script>

<style scoped>
    button{
        margin: 10px;
    }

</style>

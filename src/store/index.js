import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 演示demo
        counter: 123,
        info: {
            name: "卡卡罗特",
            identity: "SuperSaiaMan",
        },

        // 购物车列表
        shopList: [],

    },
    mutations: {
        // 默认有一个state回调参数
        increment(state, params) {
            state.counter++;
            window.console.log(params)
        },
        // 另外一种提交风格 传入对象
        decrement(state, payload){
            window.console.log(state.counter);
            window.console.log(payload);
            state.counter --;

            // mutations里面必须是同步函数 https://vuex.vuejs.org/zh/guide/mutations.html#mutation-%E5%BF%85%E9%A1%BB%E6%98%AF%E5%90%8C%E6%AD%A5%E5%87%BD%E6%95%B0
            // setTimeout(() =>{
            //     // 虽然相应里面已经更改 但是state 没有追踪到
            //     state.info.name = "孙悟空";
            // }, 1000);
            // window.console.log(payload);
        },
        asyncModify(state, payload){
            // actions 来异步修改
            state.info.name = payload;

        },
        addInfo(state, params){
            // state.info["son"] = params  // 不能响应式 修改
            // this.$set(state.info, "son", params) // 报错
            // 可参考官网响应式原理 https://cn.vuejs.org/v2/guide/reactivity.html#%E5%AF%B9%E4%BA%8E%E5%AF%B9%E8%B1%A1
            Vue.set(state.info, "son", params)
        },
        delInfo(state, params){
            // 不能响应式 能删除
            // delete state.info[params];

            // 响应式删除 对象       属性
            Vue.delete(state.info, params)
        },

        // 添加到购物车
        addShopList(state, params){
            // 判断之前是否添加过
            const oldInfo = state.shopList.find(item => item.goodsId === params.goodsId);
            // 如果没有
            if(!oldInfo){
                // 计数为1
                params.count = 1;
                // 默认被选中
                params.checked = true;
                state.shopList.push(params);
            }else{
                // 如果有 则+1
                oldInfo.count += 1
            }

            // window.console.log(state.shopList)
        },
        // 购物商品减少
        reduceShop(state, params){
            let currentIndex = state.shopList.indexOf(params);
            if(currentIndex !== -1){
                if(state.shopList[currentIndex].count > 1){
                    state.shopList[currentIndex].count -= 1
                }
                // else{
                //     state.shopList.splice(currentIndex, 1)
                // }
            }
        },
        // 改变单个商品选中状态
        changeChecked(state, params){
            // 查找当前对象
            const oldInfo = state.shopList.find(item => item.goodsId === params.goodsId);
            //
            if(oldInfo){
                oldInfo.checked = !oldInfo.checked
            }
        },

        // 全选/取消全选
        choiceAll(state, choice){
            state.shopList.forEach(el => {
                el['checked'] = choice
            })
        },

        // 删除   反向选择没选中的 重新赋值
        delChoice(state){
            state.shopList = state.shopList.filter(function(el){
                return !el.checked;
            })
        }



    },
    actions: {
        // 默认 context 上下文 参数回调
        aModify(context, payload){
            // 异步修改名字
            setTimeout(() =>{
                // actions 依旧要通过 mutations 来修改state
                context.commit('asyncModify', payload)
            }, 2000)
        }

    },
    getters: {
        // 相当于计算属性 https://www.bilibili.com/video/BV15741177Eh?p=133
        // state, getters 两个固定的默认参数
        // fun(state, getters){
        // 如果要接受参数
        // return (p) =>{
        //    return 操作
        // }
        //
        // }

        cartList(state) {
            return state.shopList
        },
        cartCount(state) {
            return state.shopList.length
        }
    },
    modules: {}
})

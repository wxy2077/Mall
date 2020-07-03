<template>
    <div>
        <nav-bar>
            <div slot="center" class="nav-bar-text">购物车({{ cartCount }})</div>
            <div slot="right" class="nav-bar-text" @click="changeState">{{ state.text }}</div>

        </nav-bar>

        <!-- 这里应该加上滑动 -->
        <div class="shopList">
            <shop-list-item v-for="(item, index) in cartList"
                            :goods-info="item"
                            :key="index"
                            @goodsCheck="goodsCheck"
                            @increment="increment"
                            @decrement="decrement"
            />
        </div>

        <settle-bottom-bar
                v-if="state.code === 1"
                @choiceAll="choiceAll"
        />

        <del-bottom-bar
                v-if="state.code === 2"
                @choiceAll="choiceAll"
                @delChoice="delChoice"
        />

    </div>
</template>

<script>
    import NavBar from '@/components/common/navbar/NavBar'

    import ShopListItem from './childComps/ShopListItem'
    import SettleBottomBar from './childComps/SettleBottomBar'
    import DelBottomBar from './childComps/DelBottomBar'

    export default {
        name: 'ShopCart',
        data() {
            return {
                state: {
                    text: "管理",
                    code: 1
                }
            }
        },
        components: {
            NavBar,
            ShopListItem,
            SettleBottomBar,
            DelBottomBar
        },
        computed: {
            cartList() {
                return this.$store.getters.cartList
            },
            cartCount() {
                return this.$store.getters.cartCount
            }
        },
        methods: {
            // 选择商品
            goodsCheck(goodsInfo) {
                this.$store.commit("changeChecked", goodsInfo)
            },
            // 增加
            increment(goodsInfo) {
                this.$store.commit("addShopList", goodsInfo)
            },
            // 减少
            decrement(goodsInfo) {
                this.$store.commit("reduceShop", goodsInfo)
            },
            // 全选
            choiceAll(isChoiceAll) {
                this.$store.commit("choiceAll", isChoiceAll)
            },
            // 改变状态
            changeState() {
                if (this.state.code === 1) {
                    this.state.code = 2;
                    this.state.text = "完成"
                } else if (this.state.code === 2) {
                    this.state.code = 1;
                    this.state.text = "管理"
                }
            },
            delChoice(){
                this.$toast("已删除");
                this.$store.commit("delChoice")
            }
        }
    }
</script>

<style scoped>

</style>

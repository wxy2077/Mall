<template>
    <div>
        <nav-bar class="nav-bar">
            <div slot="center" class="nav-bar-text">商品分类</div>
        </nav-bar>

        <div class="cate-body">
            <left-bar
                    class="left-bar"
                    :cate-list="cateList"
                    :current-cate="currentCate"
                    @cateChange="changeCate"
            />
            <div class="content-view">
                <tab-bar :current-tab="currentTab"
                         :tab-list="tabList"
                         @changeTab="changeTab"
                />

                <scroll id="tab-content"
                        ref="scroll"
                        @pullingUp="loadMore"
                        :pull-up-load="true"
                        :probe-type="3">
                    <div class="scroll-content">
                        <goods-list :tab-goods="goodsInfo"/>
                    </div>

                </scroll>
            </div>

        </div>

    </div>
</template>

<script>
    import scroll from '@/components/common/scroll/scroll'

    import NavBar from '@/components/common/navbar/NavBar'

    import LeftBar from './childComps/LeftBar'
    // import ContentView from './childComps/ContentView'
    import TabBar from './childComps/TabBar'
    import GoodsList from './childComps/GoodsLIst'

    import api from '@/api'

    export default {
        name: 'Category',
        data() {
            return {
                currentCate: 0,
                cateList: [],
                currentTab: 0,
                tabList: [],

                // 记录当前分类信息
                goodsInfo: [],
                // 存储页面信息
                tempGoods: {},
            }
        },
        components: {
            scroll,
            NavBar,
            LeftBar,
            TabBar,
            GoodsList
        },
        methods: {
            // 加载左侧分类Cate
            loadCate() {
                api.category.getCategory().then(({data}) => {
                    this.cateList = data;
                    // 加载分类tab 默认第一页
                    this.loadTab(this.cateList[this.currentCate].cate_id, 1)
                })
            },

            // 加载分类tab
            loadTab(cateId, page) {
                api.category.getTabBar({cateId}).then(({data}) => {
                    this.tabList = data;

                    this.loadGoods(this.tabList[this.currentTab].tab_id, page)

                })
            },

            // 加载商品
            loadGoods(tabId, page) {
                api.category.getGoods({tabId, page}).then(({data}) => {

                    // 当前分页 +1
                    page += 1;
                    // 判断是否有 tempGoods 以tabId为key的对象，没有就赋空对象
                    if (!this.tempGoods[tabId]) this.tempGoods[tabId] = {};
                    // 记录当前页码
                    this.tempGoods[tabId]['page'] = page;

                    // 判断是否有记录此商品
                    if (!this.tempGoods[tabId]['goods']) {
                        // 没有 说明第一页 赋值当前的商品列表
                        this.tempGoods[tabId]['goods'] = data.items
                    } else {
                        // 有 说明不是第一页，追加新的商品列表
                        this.tempGoods[tabId]['goods'].push.apply(this.tempGoods[tabId]['goods'], data.items)
                    }
                    window.console.log("当前分类", this.tempGoods);

                    // 触发watch
                    this.goodsInfo = this.tempGoods[tabId]['goods'];
                    //
                    this.$refs.scroll.finishPullUp();
                })
            },
            // 切换tab
            changeTab: function (index) {
                this.currentTab = index;
                // 切换tab 默认请求第一页
                this.loadGoods(this.tabList[this.currentTab].tab_id, 1)
            },

            // 切换cate
            changeCate(index) {
                this.currentCate = index;
                window.console.log(this.cateList[this.currentCate].cate_id, "当前分类");
                // 切换cate 也是默认请求第一页
                this.loadTab(this.cateList[this.currentCate].cate_id, 1)

            },

            // 加载更多
            loadMore() {

                let tabId = this.tabList[this.currentTab].tab_id;
                let page = this.tempGoods[this.tabList[this.currentTab].tab_id]['page'];

                this.loadGoods(tabId, page);
                window.console.log(tabId, "加载更多...");

            },

        },

        created() {
            // 首次 请求分类
            this.loadCate()

        },
        watch: {
            // 监听 goodsInfo 变化
            goodsInfo() {
                window.console.log("触发了");
                if (this.tempGoods[this.tabList[this.currentTab]]) {
                    return this.tempGoods[this.tabList[this.currentTab].tab_id]['goods']

                } else {
                    return []
                }
            }
        }

    }
</script>

<style scoped>
    .cate-body {
        display: flex;
    }

    .left-bar {
        flex: 2;
        height: calc(100vh - 43px);

    }

    .content-view {
        flex: 8;
    }

    #tab-content {
        height: calc(100vh - 43px - 49px);
        overflow: hidden;
    }

    .scroll-content {
        /* 由于底部tabBar占了43px 遮住了部分 */
        padding-bottom: 43px;
    }


</style>

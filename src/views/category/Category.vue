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
                    @cateChange="cateChange"
            />
            <div class="content-view">
                <tab-bar :current-tab="currentTab"
                         :tab-list="tabList"
                         @changeTab="changeTab"
                />

                <scroll id="tab-content"
                        :pull-up-load="true"
                        :probe-type="3">
                    <div class="scroll-content">
                        <goods-list :tab-goods="tabGoods"/>
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
                tabGoods: {},
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
            cateChange(index, cateId) {
                this.currentCate = index;
                window.console.log(cateId)
            },
            changeTab(index, tabId) {
                this.currentTab = index;
                window.console.log(tabId)
            },
            loadGoods(cateId, tabId, page) {
                api.category.getGoods({cateId, tabId, page})
            },
            // 第一次进来时加载分类
            firstCategory() {
                return api.category.getCategory()
            },
            firstTab(cateId) {
                return api.category.getTabBar({cateId})
            },
            firstGoods(cateId, tabId) {
                return api.category.getGoods({cateId, tabId})
            },
            // 使用async异步转同步确保 分类加载 读取第一个分类 获取对应的tabBar
            async firstLoad() {
                // window.console.log(this.cateList);
                const cateData = await this.firstCategory();
                this.cateList = cateData.data;

                const tabBar = await this.firstTab(this.cateList[this.currentCate].cate_id);
                this.tabList = tabBar.data;

                const currentGoods = await this.firstGoods(this.cateList[this.currentCate].cate_id,
                    this.tabList[0].tab_id
                );
                this.tabGoods = currentGoods.data;
            }
        },
        created() {
            this.firstLoad();
        },

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

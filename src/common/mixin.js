
/**
 *
 * 公共的混入对象
 * */


// 返回到顶部
export const backTopMixin = {
    data: function () {
        return {
            showBackTop: false
        }
    },
    methods: {
        backTop: function () {
            this.$refs.scroll.scrollTo(0, 0, 300);
        }
    }
};

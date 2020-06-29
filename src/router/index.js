
import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载 用到才请求
const Home = () => import('@/views/home/Home');
const Category = () => import('@/views/category/Category');
const Cart = () => import('@/views/shopcart/ShopCart');
const Profile = () => import('@/views/profile/Profile');

// 1.安装VueRouter
Vue.use(VueRouter);

// 2.配置路由信息
const routes = [
    {
        path: '/',
        redirect: '/mall/app/home'
    },
    {
        path: '/mall/app/home',
        component: Home,
        meta:{

        }
    },
    {
        path: '/mall/app/category',
        component: Category
    },
    {
        path: '/mall/app/cart',
        component: Cart
    },
    {
        path: '/mall/app/profile',
        component: Profile
    },
    {
        path: '/mall/app/demo',
        name: "Demo",
        component: () => import('@/views/demo/Demo'),
    },
    {
        path: '/mall/app/detail',
        name: "Detail",
        component: () => import('@/views/detail/Detail'),
    }
];

// 3.创建路由对象
const router = new VueRouter({
    routes,
    mode: 'history'
});

// 路由拦截
router.beforeEach((to, from, next) =>{
    next()
});

// 4.导出
export default router

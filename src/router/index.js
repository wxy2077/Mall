
import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载 用到才请求
const Home = () => import('@/views/home/Home');
const Category = () => import('@/views/category/Category');
const Cart = () => import('@/views/shopcart/ShopCart');
const Profile = () => import('@/views/profile/Profile');
// const Detail = () => import('views/detail/Detail')

// 1.安装VueRouter
Vue.use(VueRouter);

// 2.配置路由信息
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta:{

        }
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/demo',
        name: "Demo",
        component: () => import('@/views/demo/Demo'),
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
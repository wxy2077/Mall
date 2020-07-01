//
import vue from 'vue'

// 导入自定义到Toast组件
import CustToast from './CustToast.vue'


// 生成一个扩展实例构造器
const ToastConstructor = vue.extend(CustToast);

// 定义弹出组件的函数 接收三个参数 消息 toast类型 显示时间
function showToast(message, type="normal", duration = 2000) {

    // 实例化一个 CustToast.vue
    const _toast = new ToastConstructor({
        data() {
            return {
                showToast: true,
                type: type,
                message: message,
                duration: duration
            }
        }
    });

    // 把实例化的 CustToast.vue 添加到 body 里
    let element = _toast.$mount().$el;
    document.body.appendChild(element);

    // duration时间到了后隐藏
    setTimeout(() => {_toast.showToast = false} ,duration)
}

// 需要在main.js 里面使用 Vue.use(showToast);
showToast.install = (Vue) => {
    // 将组件注册到 vue 的 原型链里去,
    // 这样就可以在所有 vue 的实例里面使用 this.$toast()
    Vue.prototype.$toast = showToast
};

// 导出
export default showToast

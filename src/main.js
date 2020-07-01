import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false;

import showToast from '@/components/common/toast/index'

Vue.use(showToast);

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');



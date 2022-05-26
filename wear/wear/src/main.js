import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import MintUI from 'mint-ui'
import Vant from 'vant'
import 'vant/lib/index.css'
import MyTabbar from './components/My-tabbar.vue'
import MyLogin from './components/My-login.vue'
import MyRecommend from './components/recommend.vue'
import loginMsg from './components/loginMsg.vue'
Vue.use(Vant);
Vue.use(MintUI);
Vue.component('my-tabbar',MyTabbar);
Vue.component('my-login',MyLogin);
Vue.component('my-login',MyLogin);
Vue.component('my-recommend',MyRecommend);
Vue.component('login-msg',loginMsg);
// 引入mint-ui的样式表
import 'mint-ui/lib/style.min.css'
axios.defaults.baseURL = 'http://127.0.0.1:5050'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

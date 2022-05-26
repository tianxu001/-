import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/Product.vue'
import Change from '../views/changeage.vue'
import msg from '../views/msg-center.vue'
import officialNotice from '../views/official-notice.vue'
import privateLetter from '../views/private-letter.vue'
import Aite from '../views/aite.vue'
import Like from '../views/like.vue'
import Attention from '../views/attention.vue'
import Setting from '../views/setting.vue'
import Zhaq from '../views/zhaq.vue';
import changePhone from '../views/changephone.vue'
import shopping from '../views/shopping.vue'
import Search from '../views/search.vue'


Vue.use(VueRouter)

const routes = [
  {
	  // 洗护
    path: '/xh_min',
    component: () => import(/* webpackChunkName: "myOrder" */ '../views/xihu/min.vue')
  },
  {
	  // 服务
    path: '/service',
    component: () => import(/* webpackChunkName: "myOrder" */ '../views/xihu/main.vue')
  },
  
  {
	  // 我的订单页面
    path: '/my-order',
    component: () => import(/* webpackChunkName: "myOrder" */ '../views/my-order.vue')
  },
  {
	  // 发现好友
    path: '/list',
    component: () => import(/* webpackChunkName: "list" */ '../components/friendlist.vue')
  },
  {
	  // 得物首页
    path: '/dw',
    component: () => import(/* webpackChunkName: "concern" */ '../views/concern.vue')
  },
  {
	  // 卖家入驻页面
    path: '/enter',
    component: () => import(/* webpackChunkName: "enter" */ '../views/enter.vue')
  },
  {
	  // 我的页面
    path: '/me',
    component: () => import(/* webpackChunkName: "me" */ '../views/Me.vue')
  },
  {
	  // 注册页面
    path: '/reg',
    component: () => import(/* webpackChunkName: "reg" */ '../views/reg.vue')
  },
  {
	  // 收藏页面
    path: '/collect',
    component: () => import(/* webpackChunkName: "collect" */ '../views/collect.vue')
  },
  {
	  // 钱包
    path: '/wallet',
    component: () => import(/* webpackChunkName: "wallet" */ '../views/wallet.vue')
  },
  {
	  // 注销页面
    path: '/logout',
    component: () => import(/* webpackChunkName: "logout" */ '../views/logout.vue')
  },
  {
	  // 我的登录页（没写）
    path: '/mylogin',
    component: () => import( /* webpackChunkName: "mylogin" */ '../components/My-login.vue')
  },
  {
	  // 购买页
    path: '/shopping',
    component: () => import( /* webpackChunkName: "shopping" */ '../views/shopping.vue')
  },
  {
	  // 我的关注
    path:'/myAttention',
    component: () => import(/* webpackChunkName: "myAttention" */ '../views/myAttention.vue')
  },
  {
	  // 服务
    path: '/service',
    component: () => import( /* webpackChunkName: "service" */ '../views/service.vue')
  },
  // {
  //   path:'/shopping',
  //   component:Shopping
  // },
  {
	  // 分类
    path:'/class',
    component: () => import(/* webpackChunkName: "Class" */ '../views/class.vue')
  },
  {
	  // 搜索后的页面
    path:'/search_class',
    component: () => import(/* webpackChunkName: "search_class" */ '../views/search_class.vue')
  },
  {
	  // 搜索前的界面
   path:'/search',
   component:Search
  },
  {
	  // 
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
	  // 详情页
    path: '/details',
    name:'details' ,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "details" */ '../views/details.vue')
  },
  {
	  // 确认订单
    path: '/order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "order" */ '../views/order.vue')
  },
  {
	  // 订单详情
    path: '/order-details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "order-details" */ '../views/order-details.vue')
  },
  {
	  // 编辑地址页
    path: '/edit-address',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "edit-address" */ '../views/edit-address.vue')
  },
  {
	  // 
    path: '/edit-address1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "edit-address1" */ '../views/edit-address1.vue')
  }, {
	  // 设为默认地址
    path: '/edit-address2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "edit-address2" */ '../views/edit-address2.vue')
  },
  {
	  // 地址管理
    path: '/address',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "address" */ '../views/address.vue')
  },
  {
	  //收银台
    path: '/cashier-desk',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cashier-desk" */ '../views/cashier-desk.vue')
  },
  {
    path: '/cashier-desk1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cashier-desk1" */ '../views/cashier-desk1.vue')
  },
  {
	  // 订单详情
    path: '/order-details1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "order-details1" */ '../views/order-details1.vue')
  },
  {
	  // 订单详情
    path: '/order-details2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "order-details1" */ '../views/order-details2.vue')
  },
  {
	  // 修改手机号码
    path:'/changephone',
    component:changePhone
  },

  {
	  // 账号安全页
    path:'/zhaq',
    component:Zhaq
  },
  {
	  //设置 
    path:'/setting',
    component:Setting
  },
  {
	  // 私信
    path: '/private-letter',
    component: privateLetter
  },
  {
	  // 艾特
    path: '/aite',
    component: Aite
  },
  {
	  // 喜欢和赞
    path: '/like',
    component: Like
  },
  {
	  // 粉丝
    path: '/attention',
    component: Attention
  },
  {
	  //官方通知
    path: '/official-notice',
    component: officialNotice
  },
  {
	  // 消息中心
    path: '/msg-center',
    component: msg
  },
  {
	  // （不想写）
    path:'/product',
    component:Product
  },
  {
	  // 修改年龄（不写）
    path:'/change',
    component:Change
  },
  {
	  // 默认跳的界面
    path: '/',
    component: shopping
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

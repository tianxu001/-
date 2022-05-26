import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {
  Dialog,
  Toast
} from 'vant';
axios.defaults.baseURL = 'http://127.0.0.1:5050'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(Vuex)

export default new Vuex.Store({
  // 专门存储变量
  state: {
    // 随机刷新出可以关注的人
    attentioners:[],
    // 用户已关注的人
    concerns:[],
    search:[],
    img: [],
    sort: [],
    detail: [],
    sort2: [],
    total: '',
    order_msg: [],
    index: '0',
    // 搜索框里面的值
    inputVal: "",
    loginUser: {},
    getDelAid:'',
    order_detail_msg: {},
    // 收藏东西的数量
     collectCount:0,
    // 电话号码
    areaCode: [{
        city: "中国大陆",
        code: "+86"
      },
      {
        city: "中国香港",
        code: "+852"
      },
      {
        city: "中国台湾",
        code: "+886"
      },
      {
        city: "中国澳门",
        code: "+853"
      },
      {
        city: "美国",
        code: "+1"
      },
      {
        city: "加拿大",
        code: "+1"
      },
      {
        city: "英国",
        code: "+44"
      },
      {
        city: "日本",
        code: "+81"
      },
      {
        city: "韩国",
        code: "+82"
      },
      {
        city: "澳大利亚",
        code: "+82"
      },
      {
        city: "美国",
        code: "+1"
      },
      {
        city: "加拿大",
        code: "+1"
      },
      {
        city: "英国",
        code: "+44"
      },
      {
        city: "日本",
        code: "+81"
      },
      {
        city: "韩国",
        code: "+82"
      },
      {
        city: "澳大利亚",
        code: "+82"
      }
    ],
    // 评论的内容
    contetent:[
      {
        id:0,
        children:[
          {
            avatar:require('@/assets/logo.png'),
            uname:'张三1',
            neirong:'这个商品可以1'
          },
        ]
      },
      {
        id:1,
        children:[
          {
            avatar:require('@/assets/logo.png'),
            uname:'张三2',
            neirong:'这个商品可以2'
          }
        ]
      },
       {
        id:2,
        children:[
          {
            avatar:require('@/assets/logo.png'),
             uname:'张三4',
            neirong:'这个商品可以4'
          }
        ]
      },
       {
        id:3,
        children:[
          {
            avatar:require('@/assets/logo.png'),
            uname:'张三5',
            neirong:'这个商品可以5'
          }
        ]
      },
       {
        id:4,
        children:[
          {
            avatar:require('@/assets/logo.png'),
             uname:'张三6',
            neirong:'这个商品可以6'
          }
        ]
      },
       {
        id:5,
        children:[
          {
            avatar:require('@/assets/logo.png'),
             uname:'张三7',
            neirong:'这个商品可以7'
          }
        ]
      },
       {
        id:6,
        children:[
          {
            avatar:require('@/assets/logo.png'),
             uname:'张三8',
            neirong:'这个商品可以8'
          }
        ]
      },
       {
        id:7,
        children:[
          {
            avatar:require('@/assets/logo.png'),
             uname:'张三9',
            neirong:'这个商品可以9'
          }
        ]
      },
       {
        id:8,
        children:[
          {
            avatar:require('@/assets/logo.png'),
             uname:'张三10',
            neirong:'这个商品可以10'
          }
        ]
      },
       {
        id:9,
        children:[
          {
            avatar:require('@/assets/logo.png'),
             uname:'张三11',
            neirong:'这个商品可以11'
          }
        ]
      },
       {
        id:10,
        children:[
          {
            avatar:require('@/assets/logo.png'),
             uname:'张三12',
            neirong:'这个商品可以12'
          }
        ]
      },
       {
        id:11,
        children:[
          {
            avatar:require('@/assets/logo.png'),
             uname:'张三13',
            neirong:'这个商品可以13'
          }
        ]
      },
       {
        id:12,
        children:[
          {
            avatar:require('@/assets/logo.png'),
            uname:'张三14',
            neirong:'这个商品可以14'
          }
        ]
      }
    ],
  },
  getters: {
    // 看成计算属性
    // 1.state,自动代表当前store的state内的全部数据状态
    // 2.在使用时作为计算属性出现
    // 已关注的人的数量
    // sta数据会自动传入add方法
    // mapGetters和mapState放在methods里面
    getLikeCount(state) {
      return state.concerns.length;
    }
  },
  // 专门连接页面的方法
  mutations: {
    // 1.会自动将state对象注入到方法中
    // 2.state会自动代表当前store中state内的全部状态
    // 添加用户信息
    addUserMsg(state, users) {
      state.loginUser = users
    },
    setIsLogin(state, status) {
      state.isLogining = status
    },
    update(state, def) {
      state.detail = def.results
      state.img = def.img
      state.sort = def.sort
    },
    sort(state, sort) {
      state.sort2 = sort
    },

    // 闪电发货或者专享优惠
    total(state, total) {
      state.total = total
    },


    address(state, add) {
      state.order_msg = add
    },
    getIndex(state, index) {
      state.index = index
    },
    getInput(state, val) {
      state.inputVal = val;
      // console.log(state.inputVal)
    },
    order_detail(state, order) {
      state.order_detail_msg = order
    },
    getSearch(state,search){
      state.search=search
    },
     //从数据库获取数据到数组
     addAttentioner(state,attentioner){
      state.attentioners=attentioner
    },
    
    //从关注列表到好友列表
    addConcern(state,person){
      state.concerns.push(person);
    },
    //从好友列表删除
    delConcern(state,index){
      state.concerns.splice(index,1);
    },
    getDelAid(state,aid){
      state.getDelAid=aid
    },
    // 修改收藏商品的数量
    changeCount(state,collectCount){
          state.collectCount=collectCount;
       }
  },
  // 负责发送异步请求axios
  // context代表当前所有的state、getters、mutations、actions
  // user为自定义参数，这里值刚刚传的账号和密码
  actions: {
    // 登录发送手机号密码
    login(context, user) {
      // console.log(context)
      // /login匹配后台服务的app.js的那个路由
      axios.post('/login', `tel=${user.tel}&upwd=${user.upwd}`).then(res => {
        // 如果能code=1说明登录成功，然后将用户名存到浏览器磁盘中去
        if (res.data.code == 1) {

          let userMsg = res.data.result[0]

          console.log(userMsg)//为用户表的数据

        //  因为第一次登陆后修改头像后，两次存储头像图片的地址不一致，所以第二次登陆在获取头像路径的时候会报错
          try {
            // 二次登陆的时候获取头像路径报错的情况下，头像路径就改成catch里面的拼接方式
            userMsg.avatar = require('../assets/img/index/tabbar/' + userMsg.avatar)
          } catch (error) {
            userMsg.avatar='http://127.0.0.1:5050/'+userMsg.avatar
          }
         
          // 用conmmit执行mutations里面的addUserMsg方法
          context.commit('addUserMsg', userMsg);


          Toast.success('登录成功')

          // 设置缓存
          localStorage.setItem('uname', context.state.loginUser.uname);
          localStorage.setItem('tel', context.state.loginUser.tel);
          sessionStorage.setItem('uname', context.state.loginUser.uname);
          sessionStorage.setItem('tel', context.state.loginUser.tel);
          localStorage.setItem('upwd', context.state.loginUser.upwd);
          sessionStorage.setItem('upwd', context.state.loginUser.upwd);

          // go(0)读取缓存数据
          history.go(0)
        } else {
          Dialog.alert({
            title: "登录失败提醒",
            message: res.data.msg,
            theme: "round-button"
          })
        }
      })


    },


    // 得到详情页的数据
    getDetail(context, did) {
      console.log(did)
      axios.get("/shop/detail?did=" + did).then(res => {
        console.log(res.data);
        axios.get(`/shop/sort_id?fid=${res.data.sort[0].fid}`).then(res => {
          // console.log(res.data);
          res.data.splice(did - 1, 1)
          // console.log(res.data);
          context.commit('sort', res.data)
        })
        // console.log(res.data);
        context.commit('update', res.data)
      });
    },

    // 
    getAddress(context) {
      axios.get(`shop/adr?user_id=${this.state.loginUser.uid}`).then(res => {
        //  console.log(res.data)
        // let data=[]
        // res.data.forEach(item => {
        //   item.cellphone=item.cellphone.substr(0,3)+"****"+item.cellphone.substr(7)
        //   data.push(item)
        // });
        context.commit('address', res.data)
      })
    },
    // 从数据库获取随机关注的人的信息
    getAttentioner(context){
      axios.get("/shop/attentioner").then(res=>{
        let attentioner=[]
        res.data.forEach(item => {
          item.avatarImg=require('../assets/img/index/'+item.avatarImg);
          attentioner.push(item)
        });
        context.commit('addAttentioner',attentioner);
        // console.log(res.data)
      })
    },
    // 取消想关注的人
    delConcern(context,id){
      // console.log(id);
      axios.delete(`/shop/del/${id}`,).then(res=>{
      
      });
    }
  },
  modules: {}
})
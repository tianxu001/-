<template>
  <div>
    <!-- 顶部选项卡开始 -->
    <van-tabs v-model="active" sticky class="box_main">
      <div class="left_search">
        <img src="../assets/img/index/dewu/ic_trend_search.png" alt />
      </div>
      <van-tab title="推荐">
        <!-- 下拉刷新组件 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <!-- 关注列表模块 -->
          <div class="list_main">
            <!-- 开头全部内容 -->
            <div class="total_header">
              <span>没有新内容啦，关注一些新朋友把~</span>
              <router-link to="/list">全部</router-link>
            </div>
            <!-- 开头全部内容 -->
            <!-- 关注列表开始 -->
            <ul class="concern_list">
              <li
                v-for="(items, index) of attentioners"
                :key="index"
                @click="hidden($event,index)"
              >
                <div class="concern_item">
                  <!-- 不再关注按钮 -->
                  <span class="clear">×</span>
                  <!-- 作者头像 -->
                  <img :src="items.avatarImg" alt />
                  <!-- 作者头像 -->
                  <!-- 作者信息 -->
                  <div class="text">
                    <h2>{{ items.nickname }}</h2>
                    <p>{{ items.autograph }}</p>
                  </div>
                  <!-- 作者信息 -->
                  <!-- 关注按钮 -->
                  <div class="btn">
                    <!-- <button>+ 关注</button> -->
                    <van-button icon="plus" type="primary"  :data-id="items.id">关注</van-button>
                  </div>
                  <!-- 关注按钮 -->
                </div>
              </li>
            </ul>
            <!-- 关注列表结束 -->
          </div>
          <!-- 关注列表模块 结束-->

          <!-- 媒体信息模块 开始-->
          <div
            class="madio_message"
            v-for="(item, index) of dataArr"
            :key="index"
          >
            <!-- 用户昵称，时间，城市 (头部信息)开始-->
            <div class="avatar_header">
              <img :src="item.avatar" alt />
              <div>
                <ul>
                  <li>
                    <p>{{ item.title }}</p>
                  </li>
                  <li>
                    <span class="timer">{{ item.time }}</span>
                    <span class="city">{{ item.city }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 用户昵称，时间，城市 (头部信息)结束-->
            <!-- 视频和图片区域 开始-->
            <div class="mv_message">
              <img :src="item.mvImg" alt />
            </div>
            <!-- 视频和图片区域 结束-->
            <!-- 评论模块 开始-->
            <div class="discuss">
              <!-- 视频说明文字标题 开始-->
              <div class="explain">
                <p>{{ item.extext[0] }}</p>
                <p>{{ item.extext[1] }}</p>
              </div>
              <!-- 视频说明。。。 结束-->
              <!-- 标签 开始-->
              <div class="tag">
                <button class="btn">{{ item.btnArr[0] }}</button>
                <button class="btn">{{ item.btnArr[1] }}</button>
              </div>
              <!-- 标签 结束-->
              <!-- 分享，点赞，评论图标 开始-->
              <div class="fn_icon">
                <!-- 分享图标 -->
                <div class="share">
                  <van-cell @click="showShare = true" class="share_icon" />
                  <van-share-sheet v-model="showShare" :options="options1" />
                  <span>分享</span>
                </div>

                <!-- 装分享弹出层的内容 -->

                <div class="fn_icon_right">
                  <!-- 评论图标 -->
                  <div class="concern">
                    <van-cell @click="change(index)" class="concern_icon" />
                    <van-action-sheet v-model="show" title="评论">
                      <div class="content">
                        <div class="modal_box">
                          <div class="popup">

                            <div class="popup_main" v-if="contetent[shopid].children.length==0?ture:false">
                              <img
                                src="../assets/img/index/dewu/22ff0638d57016a3479a73a157f554e.png"
                                alt=""
                              />
                              <p>暂无评论</p>
                            </div>

                            <div v-else>
                              <div class="pl" v-for="(item) of contetent[shopid].children"
                                :key="item.id"
                              >
                                <img :src="item.avatar" alt="">
                                <span class="span1">{{item.uname}}:</span>
                                <span class="span2">{{item.neirong}}</span>
                              </div>
                            </div>

                            <div class="popup_input">
                              <input type="text" placeholder="我有个问题" @keydown.enter="Discuss()" class="shuru" v-model="input_nr"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </van-action-sheet>
                    <span>评论</span>
                  </div>

                  <!-- 点赞爱心图标 -->
                  <div class="heart" @click="changeHeart(index)">
                    <div
                      class="heart_icon heart_icon_default"
                      v-if="item.isChange"
                    ></div>
                    <div class="heart_icon heart_icon_check" v-else></div>
                    <span>{{ item.count }}</span>
                  </div>
                </div>
                <!-- 点赞爱心图标 -->
              </div>
              <!-- 分享，点赞，评论图标 结束-->
            </div>
            <!-- 评论模块 结束-->
          </div>
          <!-- 媒体信息模块  结束-->


        </van-pull-refresh>
        <!-- 下拉刷新组件 结束-->
      </van-tab>

      <!-- <van-tab title="推荐">
        <van-tabs animated>
          <van-tab v-for="(item, index) of lists" :key="index" :title="item">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
              <my-recommend></my-recommend>
            </van-pull-refresh>
          </van-tab>
        </van-tabs>
      </van-tab>
      <van-tab title="LIVE">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <my-recommend></my-recommend>
        </van-pull-refresh>
      </van-tab>
      <div class="right_camera">
        <img src="../assets/img/index/camera.png" alt />
      </div> -->
    </van-tabs>
    <!-- 顶部选项卡结束 -->
    <!-- 评论模态框开始 -->

    <!-- 评论模态框结束 -->

    <!-- 将内容撑起不被底部选项卡遮住 -->
    <div class="void"></div>
    <!-- 将内容撑起不被选项卡遮住 -->
    <!-- 底部选项卡开始 -->
    <my-tabbar :select="select"></my-tabbar>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<style lang="scss" scoped>
// 关注内容样式
.box_main {
  .left_search {
    //搜索图标
    position: fixed;
    top: 0.625rem;
    left: 0.75rem;
    z-index: 999;
    img {
      width: 1.5rem;
    }
  }

  .right_camera {
    //照相机图标
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 999;
    img {
      width: 1.5rem;
    }
  }
}
.van-tabs__wrap {
  //去除列表激活下划线样式
  // width: 160px;
  // margin-left: 100px;
  .van-tabs__line {
    display: none;
  }
  .van-tab {
    font-size: 1rem;
    color: #999;
  }
  .van-tab--active {
    color: #000;
    font-weight: bolder;
  }
}
.list_main {
  //关注列表样式
  .total_header {
    //关注列表头部样式
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    color: #aaa;
    margin: 1rem;
    a {
      width: 2.5rem;
      text-decoration: none;
      background: url("../assets/img/index/dewu/ic_bill_arrow.png") no-repeat
        right center;
      background-size: 1rem;
      color: #aaa;
    }
  }
  ::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
  .concern_list {
    //关注列表可以左右滑动的部分
    display: flex;
    overflow: scroll;
    .concern_item {
      //单个关注列表样式
      width: 7.5rem;
      height: 12.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin: 0 0.5rem;
      position: relative;
      border: 0.0625rem solid #ccc;
      border-radius: 0.25rem;
      color: #aaa;
      .clear {
        //删除图标
        position: absolute;
        top: 0.25rem;
        right: -0.5rem;
        font-size: 1.5rem;
      }
      img {
        width: 3.125rem;
        border-radius: 50%;
      }
      .text {
        text-align: center;
        font-size: 0.75rem;

        h2 {
          font-weight: bolder;
          color: #000;
          margin: 0.5rem 0;
        }
      }
      .btn {
        //关注按钮样式
        width: 7.5rem;
        height: 1.875rem;
        font-size: 0.75rem;
        font-weight: bolder;
        text-align: center;
        button {
          background-color: #00c2c2;
          color: #cbf5f6;
          outline: none;
          border: 0;
          padding: 0.5rem 1.25rem;
        }
        .van-button {
          height: 1.5rem;
        }
        .van-button--normal {
          font-size: 0.875rem;
        }
      }
    }
  }
}
.madio_message {
  //媒体信息样式
  .avatar_header {
    //媒体信息用户头部
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1rem;
    img {
      //头像图片
      width: 4rem;
      border-radius: 50%;
      margin: 1rem;
    }
    div {
      //用户名和地址时间信息样式
      ul {
        list-style: none;
        li {
          p {
            font-size: 1rem;
            font-weight: bolder;
            margin-bottom: 1rem;
            color: #000;
          }
          span {
            font-size: 0.75rem;
            color: #999;
          }
          .timer {
            margin-right: 1rem;
          }
        }
      }
    }
  }
  .mv_message {
    //媒体信息主体样式
    img {
      width: 100%;
    }
  }
  .discuss {
    //评论样式
    .explain {
      //评论标题样式
      p {
        color: #000;
        font-weight: bolder;
        font-size: 1.25rem;
        margin: 1rem;
      }
    }
    .tag {
      //标签样式
      font-size: 0.75rem;
      .btn {
        padding: 0.5rem;
        color: #666;
        background-color: #ddd;
        outline: none;
        border: 0;
      }
      .btn:nth-child(1) {
        margin: 0 1rem;
      }
    }
    .fn_icon {
      //评论图标样式
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      .share {
        //分享图标样式
        display: flex;
        flex-direction: column;
        align-items: center;
        .share_icon {
          width: 4rem;
          height: 2.25rem;
          background: url("../assets/img/index/dewu/du_trend_ic_immersive_share_black.png")
            no-repeat;
          background-size: 50%;
          margin-left: 2rem;
        }
        .van-popup--bottom {
          //让弹出层内容换行
          .van-share-sheet__options {
            flex-wrap: wrap;
            margin-left: 1rem;
          }
        }
        span {
          font-size: 0.75rem;
          font-weight: bolder;
        }
      }
      .fn_icon_right {
        //评论和点赞图标样式
        display: flex;
        .concern {
          display: flex;
          flex-direction: column;
          align-items: center;
          .concern_icon {
            width: 4rem;
            height: 2.25rem;
            background: url("../assets/img/index/dewu/du_trend_immersive_comment_black.png")
              no-repeat;
            background-size: 50%;
            margin-left: 2rem;
          }
        }
        .heart {
          display: flex;
          flex-direction: column;
          align-items: center;
          .heart_icon {
            width: 4rem;
            height: 2.25rem;
            margin-left: 2rem;
          }
          .heart_icon_check {
            background: url("../assets/img/index/dewu/du_trend_ic_bottom_like.png")
              no-repeat;
            background-size: 50%;
          }
          .heart_icon_default {
            background: url("../assets/img/index/dewu/du_trend_immersive_like_black.png")
              no-repeat;
            background-size: 50%;
          }
        }
      }
    }
  }
}

.content {
  //评论弹出层
  padding: 2rem 0px 0px;
}
.modal_box {
  //模态框样式
  .popup {
    height: 50%;
    position: relative;
    top: 50%;
    background-color: #fff;
    .popup_header {
      display: flex;
      align-items: center;
      width: 100%;
      height: 2rem;
      color: rgb(0, 0, 0);
      padding-top: 8px;
      span {
        width: 2rem;
        font-size: 2rem;
        text-align: center;
        line-height: 2rem;
        margin-left: 0.5rem;
      }
      p {
        width: 100%;
        height: 2rem;
        font-size: 1.25rem;
        font-weight: bolder;
        text-align: center;
        line-height: 2rem;
        margin-left: -2rem;
      }
    }
    .popup_main {
      height: 60%;
      text-align: center;
      margin-bottom: 4rem;
      img {
        width: 50%;
        border-radius: 50%;
      }
      p {
        color: #999;
        font-size: 1rem;
        margin: 1rem 0;
      }
    }

    .pl{
      margin: 0.1rem 0;
      img{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        vertical-align: sub;
        padding-right: 0.1rem;
      }
      .span1{
        color: black;
        font-size: 0.1rem;
      }
      .span2{
        color:gray;
        font-size: 0.1rem;
      }
    }
    .popup_input {
      // margin-top:8%;
      // line-height:32px;
      box-shadow: 0px -0.0625rem 0.625rem -0.3125rem rgba(0, 0, 0, 1);
      input {
        padding-left: 1rem;
        margin: 1rem 0;
        font-size: 1rem;
        border: 0;
        outline: 0;
      }
    }
  }
}

// .van-icon-arrow::before {
//   display: none !important;
// }
.doge {
  width: 8.75rem;
  height: 4.5rem;
  margin-top: 0.5rem;
  border-radius: 0.25rem;
}
//关注内容样式

.void {
  height: 3.75rem;
}
</style>
<script>
import { Toast } from "vant";
import { mapActions, mapMutations, mapState } from 'vuex';
import {Notify} from 'vant';
export default {
  data() {
    return {
      active: 0,
      show: false,
      isLoading: false,
      showShare: false,
      hid: true,
      input_nr:'',
      // 底部选项卡选中变量
      select: "dw",
      shopid:0,
      // 内容数据
      dataArr: [
        {
          title: "小饼干干cookie",
          avatar: require("../assets/img/index/25.jpg"),
          time: "2小时前",
          city: "上海市",
          mvImg: require("../assets/img/index/dewu/images/08E4140EF8E628C37018B812A6903660.jpg"),
          extext: ["穿这样出去约会可以咩?"],
          btnArr: ["夏季穿搭", "nice"],
          count: 15,
          isChange: true,
        },
        {
          title: "带头鱼ing",
          avatar: require("../assets/img/index/26.jpg"),
          time: "2小时前",
          city: "烟台市",
          mvImg: require("../assets/img/index/dewu/images/79BED0E292D1300AF451ED640F8CFB6C.jpg"),
          extext: ["夏季穿搭", "情侣穿搭"],
          btnArr: ["newblance休闲鞋", "Libetter"],
          count: 18,
          isChange: true,
        },
        {
          title: "得物App",
          avatar: require("../assets/img/index/27.jpg"),
          time: "一天前",
          city: "上海市",
          mvImg: require("../assets/img/index/dewu/images/791AB5A9D33AFCA3972C6A353B2E93E2.jpg"),
          extext: ["F426男孩，出去玩", "冬天"],
          btnArr: ["卫衣", "F426"],
          count: 12,
          isChange: true,
        },
        {
          title: "久见东二",
          avatar: require("../assets/img/index/28.jpg"),
          time: "一天前",
          city: "上海市",
          mvImg: require("../assets/img/index/dewu/images/BF9ED5E88138083C5A858C7AF007B586.jpg"),
          extext: ["宿舍自拍", "宿舍女孩"],
          btnArr: ["短T", "时尚穿搭"],
          count: 13,
          isChange: true,
        },
        {
          title: "林少爷23",
          avatar: require("../assets/img/index/29.jpg"),
          time: "一天前",
          city: "上海市",
          mvImg: require("../assets/img/index/dewu/images/B8882B4AAB7B4D6EA3184B677496ED7F.jpg"),
          extext: ["运动穿搭", "操场穿搭"],
          btnArr: ["运动风", "女生T恤"],
          count: 121,
          isChange: true,
        },
        {
          title: "我是里里",
          avatar: require("../assets/img/index/30.jpg"),
          time: "一天前",
          city: "烟台市",
          mvImg: require("../assets/img/index/dewu/images/F758484D0DF9688127AB74DD3187C25C.jpg"),
          extext: ["酷酷的闺蜜穿搭", "棒球服"],
          btnArr: ["Aj", "Fila老爹鞋"],
          count: 13,
          isChange: true,
        },
        {
          title: "猛创意",
          avatar: require("../assets/img/index/31.jpg"),
          time: "三天前",
          city: "烟台市",
          mvImg: require("../assets/img/index/dewu/images/AB259ED3E21F77643F46818AE1F3478B.jpg"),
          extext: ["国潮女孩儿", "可爱的女孩子太招人喜欢了"],
          btnArr: ["闺蜜", "卫衣"],
          count: 12,
          isChange: true,
        },
        {
          title: "潮鞋快讯",
          avatar: require("../assets/img/index/32.jpg"),
          time: "三天前",
          city: "上海市",
          mvImg: require("../assets/img/index/dewu/images/35E54A790CBBD2F6E0C99A6981AC5BFB.jpg"),
          extext: ["酷酷boy", "会穿搭的人儿"],
          btnArr: ["黑色穿搭", "男生穿搭"],
          count: 31,
          isChange: true,
        },
        {
          title: "小青四条蛇",
          avatar: require("../assets/img/index/33.jpg"),
          time: "三天前",
          city: "上海市",
          mvImg: require("../assets/img/index/dewu/images/D2025BECB374998A8C5C4F56CCD93879.jpg"),
          extext: ["国潮女孩", "可爱的女孩子太招人喜欢了"],
          btnArr: ["F426炫酷", "女生穿搭"],
          count: 11,
          isChange: true,
        },
        {
          title: "爱荣大叔",
          avatar: require("../assets/img/index/34.jpg"),
          time: "三天前",
          city: "西安市",
          mvImg: require("../assets/img/index/dewu/images/7220A9EBC12C5FCA57650DE32BC66A0F.jpg"),
          extext: ["新百伦日系", "日系穿搭"],
          btnArr: ["newblance", "日系"],
          count: 8,
          isChange: true,
        },
        {
          title: "请叫我小雨哥",
          avatar: require("../assets/img/index/35.jpg"),
          time: "五天前",
          city: "上海市",
          mvImg: require("../assets/img/index/dewu/images/11B934A89BF836B471DDB423ACF822A7.jpg"),
          extext: ["178cm穿搭", "穿搭推荐"],
          btnArr: ["F426国潮", "苹果"],
          count: 13,
          isChange: true,
        },
        {
          title: "Tiger_CY",
          avatar: require("../assets/img/index/36.jpg"),
          time: "七天前",
          city: "宁波市",
          mvImg: require("../assets/img/index/dewu/images/C887F5900984BADE7F7013056D8D4343.jpg"),
          extext: ["黑色cool外套", "穿搭模特"],
          btnArr: ["F426国潮", "阳光穿搭"],
          count: 11,
          isChange: true,
        },
        {
          title: "黑夜_YG",
          avatar: require("../assets/img/index/37.jpg"),
          time: "七天前",
          city: "重庆市",
          mvImg: require("../assets/img/index/dewu/images/8A8734E35A7B236913F0D14F0FC93760.jpg"),
          extext: ["夏季男生", "175cm以上穿搭"],
          btnArr: ["男生穿搭", "日系穿搭"],
          count: 21,
          isChange: true,
        },
      ],
      //推荐数据
      lists: [
        "全部",
        "球鞋",
        "穿搭",
        "美妆",
        "男士理容",
        "手表",
        "数码",
        "玩具",
        "健身",
        "运动",
        "汽车",
        "游戏",
      ],
      // 弹出层数据
      options1: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "QQ", icon: "qq" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
      // 评论的内容

    };
  },
  methods: {
    ...mapActions(['getAttentioner',"delConcern"]),
    ...mapMutations(['addConcern']),
    onRefresh() {
      setTimeout(() => {
        Toast("已经没有内容了");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    // showPopup() {
    //   this.show = true;
    // },
    //关注列表的点击事件
    hidden(e,index) {
      // let id=document.getElementById(index);
      // id.style.display="none";
      let uname =sessionStorage.getItem("uname") || localStorage.getItem("uname");
      if(uname==null){
        this.$router.push('/me')
      }else{
         if (e.target.nodeName.toLowerCase() == "button") {
        let status=false;
        this.attentioners[index].status=status;
        this.addConcern(this.attentioners[index]); 
        let id=e.target.dataset.id
        this.delConcern(id);
        this.$toast("√ 成功关注");
        history.go(0)
      }
      if (e.target.nodeName.toLowerCase() == "span") {
       e.target.parentElement.style.display = "none";
      this.axios.get(`/shop/dele?id=${this.attentioners[index].id}`).then(res=>{
        this.$toast("以后不再出现在关注列表中");
      })    
      }
      }
    },
    //点赞的事件
    changeHeart(index) {
      if (this.dataArr[index].isChange) {
        this.dataArr[index].isChange = false;
        this.dataArr[index].count++;
      } else {
        this.dataArr[index].isChange = true;
        this.dataArr[index].count--;
      }
    },
    change(index){
      this.shopid=index;
      this.show=true;
    },

     collection(){
     if(!localStorage.getItem("uname") && !sessionStorage.getItem('uname')){
       this.$router.push('/me')
     }else{
        if(this.collect){
          this.axios.get(`/shop/del_collect?user_id=${this.loginUser.uid}&product_id=${this.sort[0].did}`).then(res=>{
            // console.log(res.data)
            Notify({background:"red",message:"收藏取消"})
            this.collect=false
          })
        }else{
          this.axios.post('/shop/collect',`user_id=${this.loginUser.uid}&product_id=${this.sort[0].did}`).then(res=>{
            // console.log(res.data)
            Notify({background:"#20cbd7",message:"收藏成功，请返回收藏夹查看。"})
            this.collect=true
          })
        }
   }
  },

  // 评论方法
   Discuss(){
     if(!localStorage.getItem("uname") && !sessionStorage.getItem('uname')){
      //  this.$router.push('/me')
      Notify({background:"red",message:"请先登录!"})
     }else{
        //  console.log(this.loginUser)
         this.contetent[this.shopid].children.push({
           avatar:this.loginUser.avatar,
           uname:this.loginUser.uname,
           neirong:this.input_nr
         })
         this.input_nr=''
        //  console.log(this.contetent[this.shopid].children);

       
   }
  }
  },
  mounted(){
    this.getAttentioner();
    // console.log(this.attentioners.nickname)
  },
  computed:{
    // ...mapState(['attentioners'],['loginUser'])
    ...mapState({
      attentioners:'attentioners',
      loginUser:'loginUser',
      contetent:'contetent'
    })
  }
};
</script>
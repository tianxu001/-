<template>
  <div class="details" v-if='detail[0]'>
    <!-- 导航栏 -->
    <van-nav-bar fixed>
      <img src="../assets/img/details/ic_left_arrow.png" slot="left"  @click='back'/>
      <img src="../assets/img/details/ic_sale_kf.png" slot="right" />
      <img src="../assets/img/details/ic_share_new.png" slot="right" />
      <img src="../assets/img/details/ic_ask_buy.png" slot="right" />
    </van-nav-bar>
    <van-pull-refresh v-model="isLoading" :head-height="50" @refresh="onRefresh">
      <img
        slot="pulling"
        src="../assets/img/details/dewu_logo_gray_42x42.png"
        :style="{ transform: `scale(.7)` }"
      />
      <!-- 释放提示 -->
      <img slot="loosing" src="../assets/img/details/dewu_logo_gray_42x42.png" />
      <!-- 加载提示 -->
      <img slot="loading" src="../assets/img/details/dewu_logo_slogon.png" />
      <!-- 标签页 -->
      <van-tabs v-model="active" color="#000" sticky @scroll="show" scrollspy>
        <van-tab title="商品" name="wares">
          <!-- 标签页内容 -->
          <div class="swipe">
            <!-- 轮播 -->
            <van-swipe>
              <van-swipe-item v-for="(item,index) of img[0].carousel_img.split(',')" :key="index">
                <img v-lazy="require(`../assets/img/commodity/${item}`)"  alt="">
              </van-swipe-item>
            </van-swipe>
          </div>
          <!-- 标题 -->
          <h1 >{{detail[0].title}}</h1>
          <h2>￥{{sort[0].d_price}}</h2>
          <!-- 优惠时间 -->
          <van-cell center is-link to>
            <div slot="title">
              <span style="color:red">限时9.3折</span>
              <span style="color:#999; background:#fff; border:1px solid #eee">折后价￥669</span>
            </div>
            <van-count-down :time="times" format=" HH 小时 mm 分 ss 秒" />
          </van-cell>
          <!-- 新人礼包 -->
          <router-link class="gift_bag" to title>
            <div>
              <span>520元大礼包</span>
              <button>去使用</button>
            </div>
          </router-link>
          <!-- 保障 -->
          <van-cell center is-link to>
            <span>
              <img src="../assets/img/details/ic_trend_gray.png" alt width="20px" />
              <span>先鉴别后发货</span>
            </span>
            <span>
              <img src="../assets/img/details/ic_product_professor.png" alt width="20px" />
              <span>逐件查验</span>
            </span>
            <span>
              <img src="../assets/img/details/ic_product_real.png" alt width="20px" />
              <span>正品保证</span>
            </span>
            <!-- 花呗 -->
          </van-cell>
          <van-cell center title="花呗分期，最低月付62.61元" is-link to="/"></van-cell>
          <!-- 排行 -->
          <van-cell is-link to="/" center>
            <span
              style="display:inline-block;width:98vw; height:30px;background:#f7f8fa;padding:8px 0 0 20px;"
            >
              <img src="../assets/img/details/ic_star_fill.png" alt style="width:20px" />
              <span
                style="margin-left:16px ;position: relative;top:-5px;font-size:16px"
              >入选[ozweego排行榜]第1名</span>
            </span>
            <!-- 相关推荐 -->
          </van-cell>
          <div class="relevant">
            <van-cell title="相关推荐" is-link to="/">全部</van-cell>
            <van-swipe>
              <van-swipe-item  >
                <ul>
                  <li v-if="index<3" v-for="(item,index) of sort2" :key="index"  >
                    <img v-lazy="require(`../assets/img/commodity/${item.img}`)" alt />
                    <p>{{item.dtitle}}</p>
                    <h3>￥{{item.d_price}}</h3>
                  </li>
                </ul>
              </van-swipe-item>
              <van-swipe-item  >
                <ul>
                  <li v-if="index>=3&&index<6" v-for="(item,index) of sort2" :key="index"  >
                    <img v-lazy="require(`../assets/img/commodity/${item.img}`)" alt />
                    <p>{{item.dtitle}}</p>
                    <h3>￥{{item.d_price}}</h3>
                  </li>
                </ul>
              </van-swipe-item>
              <van-swipe-item  >
                <ul>
                  <li v-if="index>=6&&index<9" v-for="(item,index) of sort2" :key="index"  >
                    <img v-lazy="require(`../assets/img/commodity/${item.img}`)" alt />
                    <p>{{item.dtitle}}</p>
                    <h3>￥{{item.d_price}}</h3>
                  </li>
                </ul>
              </van-swipe-item>
            </van-swipe>
            <van-cell center is-link to title="adidas originals" label="42305人关注|7585款商品">进入品牌</van-cell>
            <!-- <van-cell center is-link to title="最近购买">全部</van-cell>
            <ul v-for="(k,i) of 4" :key="i">
              <li>
                <img src="../assets/img/details/ic_trend_gray.png" width="20px" />
                <span>用户</span>
              </li>
              <li>40</li>
              <li>￥729</li>
              <li>1分钟前</li>
            </ul> -->
            <van-cell center is-link to title="商品评价">80%的人觉得尺码合适</van-cell>
            <div>
              <div>
                <span>偏小</span>
                <span>222</span>
              </div>
              <div>
                <span>合适</span>
                <span>3372</span>
              </div>
              <div>
                <span>偏大</span>
                <span>606</span>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="穿搭" name="wear">
          <div class="wear">
            <van-cell title="穿搭精选" to>
              <p>发布+</p>
            </van-cell>
            <ul>
              <li v-for="(k,i) of 9" :key="i"></li>
            </ul>
            <van-cell title="查看全部" center is-link to></van-cell>
          </div>
        </van-tab>
        <van-tab title="详情" name="detail">
          <div class="detail">
            <img src="../assets/img/details/tab.jpg" alt />
            <div class="det">
              <h1>参数</h1>
              <van-cell center title="品牌">{{detail[0].brand}}</van-cell>
              <van-cell center title="货号">{{detail[0].item}}</van-cell>
              <van-cell center title="发售价格">￥{{detail[0].selling_price}}(仅供参考)</van-cell>
              <van-cell center title="发售日期">{{detail[0].date}}</van-cell>
              <van-cell center title="鞋面材质">{{detail[0].quality}}</van-cell>
              <van-cell center title="鞋头款式">{{detail[0].toe_style}}</van-cell>
              <van-cell center title="闭合方式">{{detail[0].closed}}</van-cell>
              <van-cell center title="鞋帮高度">{{detail[0].upper}}</van-cell>
              <van-cell center title="功能性">{{detail[0].functionality}}</van-cell>
              <van-cell center title="鞋底材料">{{detail[0].tread}}</van-cell>
              <van-cell center title="配色">{{detail[0].color}}</van-cell>
            </div>
            <div @click="open" style="padding:0 14px" class="det2">
              <span style="color:#999;font-size:14px">点击展开</span>
              <img
                src="../assets/img/details/brand_account_arrow.png"
                style="float:right;width:20px"
              />
            </div>
            <div class="introduce">
              <h1>鞋款介绍</h1>
              <img v-lazy="require(`../assets/img/commodity/${img[0].icon}`)" alt />
              <h1>商品介绍</h1>
              <p>{{detail[0].particulars}}</p>
              <h1>商品展示</h1>
              <img v-for="(item,index) of img[0].show_img.split(',')" :key='index' v-lazy="require(`../assets/img/commodity/${item}`)" alt />
              <h1>细节呈现</h1>
              <img v-lazy="require(`../assets/img/commodity/${img[0].minutia_img}`)" alt />
              <img src="../assets/img/details/size.png" alt />
              <h1>购买须知</h1>
              <p>
                <span>关于商品:</span>由于生产批次、产地的不同以及商品更新升级和品牌方图片调整,实物的材质、外观细节、配件和包装等可能与商品图片存在细微差异,具体请以收到的实物为准。如商品上绑有调包扣或贴有防伪贴纸,请您收到货后先确认商品无误再进行拆除
              </p>
              <p>
                <span>关于色差:</span>因手机、电脑等显示设备的色彩偏差和个人对颜色理解等不同,导致实物可能会与照片存在一定色差 请您以收到的实物为准。
              </p>
              <p>
                <span>关于气味:</span>新商品可能会存在一些气味,这些气味来自材料、鞋底、胶水等,您可以将商品放置在通风处一段时间,减少气味后再穿着
              </p>
              <p>
                <span>关于尺码:</span>商品详情页的尺码表仅供参考,由于品牌尺码标准、产品款型及测量方法不同,商品实际尺寸可能会存在些许误差,均属于正常情况
              </p>
              <p>
                <span>保养说明:</span>请定期清洁鞋子,针对不同材质与工艺进行清洁与保养,可以使用干净柔软白色湿润棉布或软毛刷擦拭鞋面,最好使用专业鞋类清洁剂,切勿使用刷子猛刷;避免浸水,曝晒及火烤,清洁后可用纸巾包裹放置干燥通风处,避免阳光暴晒以免引起老化、变形、褪色及断裂。
              </p>
              <p>
                <span>自然氧化:</span>部分球鞋由于生产年代久远以及鞋面和鞋底等处的材质特殊与空气长期接触后会发生自然氧化实属正常现象无法避免。
              </p>
              <img src="../assets/img/details/dewu.jpg" alt />
            </div>
          </div>
        </van-tab>
        <van-tab title="推荐" name="recommend">
          <div class="recommend">
            <h1>为你推荐</h1>
            <ul>
              <li v-for="(item,index) of sort2" :key="index" @click='part(index,item)'>
                <img v-lazy="require(`../assets/img/commodity/${item.img}`)" alt />
                <p>{{item.dtitle}}</p>
                <h3>￥{{item.d_price}}<span>{{item.count}}人付款</span></h3>
              </li>
            </ul>
            <div>
              <ul>
                <li>
                  <img src="../assets/img/details/ic_mall_brand_identify_new.png" alt="">
                  <span>多重鉴别</span>
                </li>
                <li>
                  <img src="../assets/img/details/ic_mall_brand_check_new.png" alt="">
                  <span>逐件查验</span>
                </li>
                <li>
                  <img src="../assets/img/details/ic_mall_brand_genuine_new.png" alt="">
                  <span>正品保证</span>
                </li>
              </ul>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </van-pull-refresh>


    <div class='shopping'>
      <ul>
        <li @click='collection()'>
          <img v-if='collect==false' src="../assets/img/details/sku_float_collect_unselected.png" alt="">
          <img v-else src="../assets/img/details/sku_float_collect_select.png" alt="">
          <p>加入搭配</p>
        </li>
        <li @click='shop'>立即购买</li>
      </ul>
    </div>


    <!-- 购物车组件 -->
    <shop v-show="shopping"  @close='close'></shop>
     <!-- <my-login :isLogining="isLogining"></my-login> -->
  </div>
</template>
<script>
import shop from '../components/shop.vue';
import {mapActions,mapState} from 'vuex';
import {Notify} from 'vant';
export default {
  data() {
    return {
      active: "wares",
      isLoading: false,
      times: `${parseInt(new Date("2020-09-27 10:00:00") - new Date())}`,
      shopping:false,
      aaa:false,
      collect:false,
      // isLogining:false
    };
  },
  computed:{
    ...mapState(['detail','img','sort','sort2','index','loginUser']),
  },
  components:{
    shop
  },
  mounted(){

        // 请求详细数据
        this.getDetail( this.$route.query.did) ; 

        // 判断是否收藏
        this.axios.get(`/shop/get_collect?user_id=${this.loginUser.uid}&product_id=${this.$route.query.did}`).then(res=>{
          // console.log(res.data)
          if(res.data.length>0){
            this.collect=true
          }
        })   
        // console.log(this.index)   
  },
  
  methods: {
    // 引入请求详情页数据方法
    ...mapActions(['getDetail']),


    // 标签页根据滚动高度消失出现
    show(e) {
      let tab = document.getElementsByClassName("van-sticky")[0];
      let nav = document.getElementsByClassName("van-nav-bar")[0];
      if (e.scrollTop > 300) {
        tab.style.visibility = "visible";
        tab.style.opacity = 1;
        nav.style.background = "#fff";
      } else {
        tab.style.visibility = "hidden";
        nav.style.background = "transparent";
        tab.style.opacity = 0;
      }
    },
    // 下拉刷新事件
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    // 参数表高度度
    open(e) {
      let detEle2 = document.getElementsByClassName("det2")[0];
      var detEle = document.getElementsByClassName("det")[0];
      detEle.style.height = "540px";
      detEle2.style.display = "none";
    },


    // 控制模态框事件
    shop(){
      let detailsEle=document.getElementsByClassName('details')[0]
      this.shopping=true
      detailsEle.style.overflow="hidden" 
    },



    // 关闭模态框子传父
    close(e,i){
      // console.log(i);i
      this.shopping=i
      e.stopPropagation()
    },
    part(index,item){
      this.$router.push({
        name:'details',
        query:{did:item.did}
      }) 
     this.getDetail(item.did) ; 
      this.$router.go(0)
       console.log(item)
    },
    // 返回shopping页面
    back(){
      this.$router.push('/')
    },

    // 是否收藏
    collection(){
     if(!localStorage.getItem("uname") && !sessionStorage.getItem('uname')){
       this.$router.push('/me')
     }else{
        if(this.collect){
          this.axios.get(`/shop/del_collect?user_id=${this.loginUser.uid}&product_id=${this.sort[0].did}`).then(res=>{
            // console.log(res.data)
            Notify({background:"#999999",message:"收藏取消"})
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
  }
  }, 
};
</script>
<style lang="scss" scoped>
.details {
  color: #000;
  $border: 0.875rem solid #f7f8fa;
  height: 100vh;
  // 导航栏样式
  position: relative;
  .van-nav-bar {
    background-color: transparent;
    .van-nav-bar__right {
      img {
        margin-left: 1.25rem;
      }
    }
  }
  //   去掉下边框
  .van-hairline--bottom::after {
    border-bottom-width: 0px;
  }
  //   标签页样式
  .van-tabs--line {
    position: relative;
    margin-top: 46px;
    // 标签导航样式
    .van-sticky {
      opacity: 0;
      position: fixed;
      top: 2.875rem;
      width: 100vw;
      transition: all 0.4s linear;
    }
    // 选中时的样式
    .van-tab--active {
      font-weight: 600;
    }
    .van-tab__text {
      font-size: 1.125rem;
    }
  }
  // 标签页内容样式
  .van-tabs__content {
    padding-top: 2.5rem;
    .van-swipe__indicator--active {
      background-color: #000;
    }
    // 轮播样式
    .swipe > .van-swipe {
      height: 15rem;
      .van-swipe-item {
        img{
          width: 90vw;
        };
        text-align: center;
      }
    }
  }
  //   标题
  h1 {
    padding: 1.875rem 1.875rem 0 1.25rem;
    line-height: 1.5rem;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
  }
  // 价格
  h2 {
    margin: 0;
    padding: 1.25rem 1.875rem 1.25rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 800;
    border-bottom: 0.0625rem solid #eee;
  }
  // 限时优惠
  h2 + div {
    .van-cell__title {
      width: 60vw;
      height: 1.5rem;
      font-size: 0.75rem;
      background-image: url("../assets/img/details/dscount_get.png");
      background-size: 100%;
      text-align: center;
      span {
        vertical-align: middle;
        display: inline-block;
        box-sizing: border-box;
        height: 80%;
        width: 50%;
      }
    }
  }
  // 大礼包
  .gift_bag {
    color: #fff;
    div {
      width: 100vw;
      height: 5rem;
      background-image: url("../assets/img/details/pd_bg_520.jpg");
      background-size: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      span {
        font-size: 2.125rem;
        font-weight: 800;
      }
      button {
        display: inline-block;
        border: none;
        outline: none;
        font-weight: 600;
        height: 3.75rem;
        border-radius: 50%;
        background-image: linear-gradient(#ee4479, #d10058);
        box-shadow: 0 0.625rem 0.875rem #e672a6 inset;
      }
    }
  }
  // 鉴别
  .gift_bag + .van-cell {
    width: 100vw;
    border-bottom: 0.875rem solid #f7f8fa;
    span {
      display: inline-block;
      font-size: 0.875rem;
      margin-left: 10px;
      span {
        margin-left: 5px;
        position: relative;
        top: -5px;
      }
    }
  }

  .relevant {
    .van-cell {
      border-top: $border;
    }
    // 单元格
    .van-cell__title {
      font-size: 20px;
      font-weight: 600;
      color: #000;
    }
    // 商品评价
    & > div:last-child {
      display: flex;
      justify-content: space-around;
      border-bottom: $border;
      & > div {
        background-color: #eee;
        font-size: 1rem;
        margin: 1.25rem 0;
        span {
          display: inline-block;
          height: 1.875rem;
          margin: 0 0.875rem;
          line-height: 1.875rem;
        }
      }
    }
    // 最近购买{
    & > ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      li:last-child {
        color: #999;
      }
      span {
        margin-left: 5px;
      }
    }
    // 相关推荐
    .van-swipe {
      .van-swipe-item {
        width: 100vw;
        height: 10.5rem;
        &>ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
          li {
            width: 30vw;
            text-align: center;
            img {
              width: 5.25rem;
            }
            p {
              margin: 0;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              width: 100%;
              font-size: 0.875rem;
              line-height: 1.5rem;
            }
            h3 {
              margin-top: 5px;
              font-size: 1.25rem;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
  // 穿搭精选
  .wear {
    border-bottom: $border;
    .van-cell__title {
      font-size: 20px;
      font-weight: 600;
      color: #000;
    }
    p {
      width: 5rem;
      height: 1.875rem;
      border: 1px solid #eee;
      line-height: 1.875rem;
      text-align: center;
      font-size: 1.125rem;
      float: right;
    }
    & > ul {
      width: 100vw;
      height: 100vw;
      list-style: none;
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      align-content: space-between;
      li {
        width: 33vw;
        height: 33vw;
        background-image: url("../assets/img/details/wear.jpg");
        background-position: center;
        background-size: 100%;
      }
    }
    ul + .van-cell > .van-cell__title {
      font-size: 18px;
      font-weight: 500;
    }
  }
  // 详情
  .detail {
    padding-top: 1.25rem;
    & > img {
      width: 90vw;
      padding: 0 5vw;
    }
    & > .det {
      height: 17.125rem;
      overflow: hidden;
      h1 {
        text-align: left;
      }
      .van-cell::after {
        border-bottom: 0;
      }
      .van-cell__title {
        color: #333;
        text-align: left;
      }
      .van-cell__value {
        color: #000;
      }
    }
    & > .van-cell {
      border-top: 1px solid #efefef;
    }
    .introduce {
      text-align: center;
      &>h1 {
        text-align: left;
        margin-bottom:0.3125rem ;
      }
      img {
        width: 90vw;
      }
      p {
        line-height: 1.625rem;
        color: #666;
        padding: 0.3125rem 1rem;
        font-size: 0.875rem;
        text-align: left;
        span {
          color: #000;
          font-weight: 600;
        }
      }
      img:last-child {
        display: inline-block;
        border-top: $border;
        border-bottom: $border;
        padding: 1.875rem 0;
      }
    }
  }
  // 为你推荐
  .recommend {
    h1 {
      text-align: left;
    }
   &> ul {
      list-style-type: none;
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      align-content: space-between;
      li {
        border: .5px solid #eee;
        box-sizing: border-box;
        width: 50vw;
        text-align: center;
        padding: 1.25rem 0.875rem;
        img {
          width: 6.25rem;
        }
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          width: 100%;
          font-size: 1rem;
          text-align: left;
          margin-top:0.3125rem ;
          line-height: 1.25rem;
        }
        h3 {
          margin-top:0.5rem;
           text-align: left;
           font-weight: 600;
           span{
             float:right;
             color:#999;
             font-size: 0.875rem;
             font-weight: 500;
           }
        }
      }
    }
    div{
      border-bottom:1px solid #eee ;
       margin-bottom: 4.375rem;
      ul{
        margin: 0.75rem 3.125rem;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        color: #999;
        font-size:0.875rem;
        span{
          position: relative;
          top: -3px;
          margin-left:0.3125rem;
        }
        img{
          width:1rem;
         
        }
      }
    }
  }
  &>.shopping{
    margin-top:3.75rem;
    width: 100vw;
    padding: 0.625rem;
    position: fixed;
    bottom: -1px;
    background-color: #fff;
    &>ul{
      list-style: none;
      display: flex;
      justify-content: space-around;
      font-size:0.875rem ;
      height: 3.125rem;
      img{
        width: 1.875rem;
      }
      p{
          margin: 0;
        }
      &>li:last-child{
        text-align: center;
        width: 70vw;
        color: #fff;
        font-size: 1.375rem;
        background-color: #20cbd7;
        vertical-align: middle;
        height: 3.125rem;
        line-height: 3.125rem;
        
      }
    }
  }
  &>.shop{
    height: 100%;
  position: absolute;
  top:0;
  z-index: 333;
  }
}
</style>
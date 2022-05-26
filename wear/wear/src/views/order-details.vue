<template >
  <div @click="none" >
    <!-- 头部导航栏开始 -->
    <header class="header-box">
      <img class="img1" @click="back" src="../assets/img/dewuImage/left_back.png" />
      <span>订单详情</span>
      <img class="img2" src="../assets/img/dewuImage/insure_client.png" alt />
    </header>
    <!-- 头部导航栏结束 -->
    <!-- 订单倒计时开始 -->
    <div class="daojishi" v-if="show">
      <p class="p1">您有代付款订单</p>
      <p class="p2">请在8分钟内付款，超时订单将自动关闭。</p>
      <van-count-down class="p3" :time="time" v-show="timeShow = true">
        <template>
          <span class="block">{{ this.m }}</span>
          <span class="colon">:</span>
          <span class="block">{{ this.s }}</span>
        </template>
      </van-count-down>
      <p class="p4">付款倒计时</p>
    </div>
    <!-- 订单倒计时结束 -->
    <!-- 交易关闭开始-->
    <div class="daojishi" v-if="!show">
      <p class="p1">交易关闭</p>
      <p class="p2">您已取消订单。</p>
    </div>
    <!-- 交易关闭结束 -->
    <!-- 收货人信息开始 -->
    <div>
      <div class="address">
        <img src="../assets/img/dewuImage/insure_location.png" alt />
        <span class="s1">收货人：{{order_detail_msg.receiver}}</span>
        <span
          class="s2" v-if='order_detail_msg.cellphone'
        >{{order_detail_msg.cellphone.substr(0,3)+"****"+order_detail_msg.cellphone.substr(7)}}</span>
        <p class="s3">{{order_detail_msg.province+order_detail_msg.address}}</p>
      </div>
    </div>
    <!-- 收货人信息结束 -->
    <!-- 商品信息开始 -->
    <div class="product" v-if='order_sort.img'>
      <img v-lazy="require(`../assets/img/commodity/${order_sort.img}`)" alt />
      <span>「 {{total.genre}}」{{order_detail.title}}</span>
      <div>
        <span class="span1">{{order_detail.specs}}</span>
        <span class="span2">数量 × 1</span>
      </div>
      <div class="price">
        <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
        <span>¥ {{Number(order_detail.price)}}</span>
      </div>
      <!-- 商家ID开始 -->
      <p class="id">企业商家ID：LinYao520 ， 支持七天无理由退货服务。查看详情</p>
      <!-- 商家ID结束 -->
      <!-- 鉴别图片开始 -->
      <img
        style="width:100%;padding:0;border-bottom:1px solid rgb(240,240,240)"
        src="../assets/img/dewuImage/jianbie.png"
        alt
      />
      <!-- 鉴别图片结束 -->
    </div>
    <!-- 商品信息结束 -->
    <!-- 快递信息开始 -->
    <van-cell-group>
      <!-- <van-cell title="顺丰速运" value="内容" />
      <van-cell title="待支付" :value="`¥${price.toFixed(2)}`" />-->
      <van-cell class="van-cell3" title="合计支付" :value="`¥${Number(order_detail.price).toFixed(2)}`" />
    </van-cell-group>
    <!-- 快递信息结束 -->
    <!-- 订单编号开始 -->
    <div style="padding:10px;line-height:2; color:#333; border-bottom:8px solid rgb(240,240,240)">
      <div style="position:relative">
        <span>订单编号:</span>
        <span style="position:absolute; right:10px">{{number}}</span>
      </div>
      <div style="position:relative">
        <span>创建时间:</span>
        <span style="position:absolute; right:10px">{{now}}</span>
      </div>
    </div>

    <!-- 订单编号结束 -->
    <!-- 保险开始 -->
    <div class="baoxian">
      <img src="../assets/img/dewuImage/dewu_logo_gray_32x32.png" alt />
      <span>本订单有得物App × 人保财险联合保障</span>
    </div>
    <!-- 保险结束 -->
    <!-- 更多开始 -->
    <div class="more" v-if="!show">
      <img src="../assets/img/dewuImage/more.png" alt @click.stop="queren" />
      <div class="icon" v-if="iconShow">
        <div class="del">
          <div @click="tanchu">删除订单</div>
          <div class="sanjiao"></div>
        </div>
      </div>
    </div>
    <div class="footer" v-else>
      <div class="more">
        <img src="../assets/img/dewuImage/more.png" alt @click.stop="queren" />
        <div class="icon" v-if="iconShow">
          <div class="del">
            <div @click="cancel">取消订单</div>
            <div class="sanjiao"></div>
          </div>
        </div>
      </div>
      <button @click="pay1()">立即付款</button>
    </div>
    <!-- 更多结束 -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      time: 8 * 60 * 1000,
      show: true,
      // name: "林垚",
      // phone: "13145215475",
      // address: "云南省大理白族自治州漾濞白族自治县",
      iconShow: false,
      // price: 999,
      now: new Date().toLocaleString(),
      xiadanTime: 0, // 下单时间
      exTime: 0, // 过期时间
      chaTime: 1000, // 时间差
      m: 0, // 分
      s: 0, // 秒
      number: "",
      order: {},
       t:'',
       order_detail:{},
       order_sort:{}
    };
  },
  computed: {
    ...mapState(["index",'total',"sort", "order_detail_msg","loginUser"]),
  },
  created() {
    this.xiadanTime = localStorage.getItem("xiadanTime");
    //exTIme = 过期时间
    this.exTime = this.xiadanTime * 1 + 8 * 60 * 1000;
    this.chaTime = this.exTime - new Date().valueOf();
    this.chaTime -= 1000;
    this.m = Math.floor(this.chaTime / 1000 / 60);
    this.m = this.m < 10 ? "0" + this.m : this.m;
    this.s = Math.floor((this.chaTime / 1000) % 60);
    this.s = this.s < 10 ? "0" + this.s : this.s;
    // console.log(this.m);
    // console.log(this.s);
    this.t = setInterval((res) => {
      this.chaTime -= 1000;
      this.m = Math.floor(this.chaTime / 1000 / 60);
      this.m = this.m < 10 ? "0" + this.m : this.m;
      this.s = Math.floor((this.chaTime / 1000) % 60);
      this.s = this.s < 10 ? "0" + this.s : this.s;
      // console.log(this.m);
      // console.log(this.s);
      // console.log(this.chaTime)
      if (this.chaTime <1000) {
        clearInterval(this.t);
        this.axios
          .post("/shop/cancel", `user_id=${this.order_detail_msg.user_id}&status=1`)
          .then((res) => {
            //  console.log(res.data)
            this.order = res.data[0];
            // this.axios
            //   .post(
            //     "/shop/order_details",
            //     `user_id=${res.data[0].aid}&product_id=${this.sort[0].did}&count=1`
            //   )
            //   .then((res) => {
            //     //  console.log(res.data)
            //     //  console.log(this.order)
            //   });
          });
           let baoxian = document.getElementsByClassName("baoxian")[0];
          baoxian.style.marginBottom = "0";
        this.show = false;
      }
    }, 1000);
  },
  mounted() {
    for (var i = 0; i <= 12; i++) {
      this.number += parseInt(Math.random() * 9);
    }
    this.axios.get(`/shop/status?user_id=${this.loginUser.uid}&status=1`).then(res=>{
      console.log(res.data);
      this.axios.get(`/shop/order_detail?sdid=${res.data[0].product_id}`).then(res=>{
        this.order_detail=res.data[0]
        this.axios.get(`/shop/order_sort?did=${res.data[0].spid}`).then(res=>{
        // console.log(res.data)
        this.order_sort=res.data[0]
      })
      })
    })
    // console.log(this.number);
  },
  methods: {
    back() {
      this.$router.push({
        name: "details",
        query: { did: this.sort[0].did },
      });
    },
    queren() {
      this.iconShow = true;
    },
    none() {
      this.iconShow = false;
      // console.log(111);
    },
    tanchu() {
      this.$dialog
        .confirm({
          title: "确认删除订单吗?",
          confirmButtonColor: "#30afb8",
        })
        .then(() => {
          // on confirm
          // console.log(110)
          // console.log(this.order.aid)
          // console.log(this.number)
          this.axios
            .get(`/shop/det-order?aid=${this.order.aid}`)
            .then((res) => {
              // console.log(res.data)
              // console.log(111)
                this.$notify({
                  duration: 1000,
                  color: "#fff",
                  background: "rgba(0,0,0,.4)",
                  message: "删除成功",
                });
                this.$router.push({
                  name: "details",
                  query: { did: this.sort[0].did },
                });
            });
        })
        .catch(() => {
          // on cancel
        });
    },
    cancel() {
      this.$dialog
        .confirm({
          message: `￥${this.total.price}为当前渠道最低价，取消订单有可能错过该价格`,
          color: "#999",
          confirmButtonColor: "#30afb8",
          confirmButtonText: "再想想",
          cancelButtonText: "确认取消",
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
          // this.chaTime = 1000;
          clearInterval(this.t);
          
        this.show = false;
          
          //  console.log(this.order_msg[0].user_id)
          this.axios
            .post(
              "/shop/cancel",
              `user_id=${this.order_detail_msg.user_id}&status=1`
            )
            .then((res) => {
              this.order = res.data[0];
              // console.log(res.data)
              // console.log(this.order)
              // console.log(this.number)
              // this.axios
              //   .post(
              //     "/shop/order_details",
              //     `order_id=${res.data[0].aid}&product_id=${this.sort[0].did}&count=1`
              //   )
              //   .then((res) => {
              //     //  console.log(res.data)
              //     //  console.log(this.order)
              //   });
            });

          let baoxian = document.getElementsByClassName("baoxian")[0];
          baoxian.style.marginBottom = "0";
        });
    },
    pay1() {
      this.$router.push("/cashier-desk");
    },
  },
  //  beforeRouteLeave(to,from,next){
  //     console.log(to)
  //     console.log(from)
  //     if(from.path=='/order-details'){
  //       console.log(22222222)
        
  //       from.meta.keepAlive=true
  //     }
  //     next()
  //   },
  //    beforeRouteEnter(to,from,next){
  //     next()
  //   }
};
</script>
<style lang="scss" scoped>
.header-box {
  width: 100vw;
  height: 8vh;
  display: flex;
  position: fixed;
  top: 0px;
  justify-content: center;
  align-items: center;
  color: #000;
  z-index: 100;
  background-color: #fff;
  .img1 {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: 1.25rem;
  }
  .img2 {
    position: absolute;
    width: 1.5rem;
    height: 1, 5rem;
    right: 1.25rem;
  }
  span {
    display: inline-block;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    bottom: 0.8rem;
  }
}
.daojishi {
  margin-top: 8vh;
  padding: 0.8rem 1.25rem;
  background-color: #2b2c3c;
  line-height: 2;
  color: #fff;
  position: relative;
  .p1 {
    font-weight: 600;
  }
  .p2 {
    font-size: 12px;
  }
  .p3 {
    color: #fff;
    position: absolute;
    font-weight: 600;
    right: 1.25rem;
    top: 1.5625rem;
  }
  .p4 {
    position: absolute;
    right: 1.25rem;
    bottom: 1rem;
    font-size: 14px;
  }
}
.address {
  position: relative;
  padding: 0.8rem 1rem;
  color: #000;
  line-height: 2;
  border-bottom: 8px solid rgb(240, 240, 240);
  img {
    height: 1.25rem;
  }
  .s1 {
    position: absolute;
    top: 0.6rem;
  }
  .s2 {
    position: absolute;
    top: 0.6rem;
    right: 1.25rem;
  }
  p {
    font-size: 14px;
    margin-left: 20px;
    color: #80808f;
  }
}
.product {
  position: relative;
  padding: 0.5rem 1rem;
  img {
    padding: 0.9375rem 0;
    width: 100px;
  }
  span {
    margin-left: 1.25rem;
    font-size: 14px;
    line-height: 1.5;
    position: absolute;
  }
  div {
    color: #8a8a8a;
    position: absolute;
    width: 50vw;
    left: 6.875rem;
    top: 3.5rem;
    span {
      margin-left: 1.875rem;
    }
    .span2 {
      margin-left: 3.125rem;
    }
  }
  .id {
    padding: 0.9375rem;
    margin-top: 0.625rem;
    font-size: 12px;
    color: #ababab;
    border-bottom: 1px solid rgb(240, 240, 240);
    border-top: 1px solid rgb(240, 240, 240);
  }
}
.price {
  position: relative;
  top: 50px;
  margin-bottom: 10px;
  padding: 0.8rem 1.5rem;
  img {
    width: 1.2rem;
    position: absolute;
    top: 1rem;
  }
  span {
    position: absolute;
    color: #000;
    top: 1.8rem;
    font-size: 17px;
    font-weight: 600;
  }
}
.van-cell3 {
  border-bottom: 8px solid rgb(240, 240, 240);
  .van-cell__value {
    font-size: 18px;
    color: #000;
    font-weight: 600;
  }
}
.baoxian {
  font-size: 14px;
  color: #8e8e9b;
  border-bottom: 1px solid #f1f1f1;
  padding: 0.625rem;
  margin-bottom: 11vh;
  img {
    width: 1.5rem;
    vertical-align: middle;
    margin-right: 0.625rem;
  }
}

.more {
  position: relative;
  // padding: 0.625rem;
  img {
    display: block;
    margin: 0.625rem;
    position: absolute;
    left: 1.25rem;
    width: 2rem;
  }
  .icon {
    position: absolute;
    background-color: #fff;
    z-index: 999;
    top: -4rem;
    left: 0.625rem;
    .del {
      font-size: 16px;
      font-weight: 600;
      color: #000;
      width: 6.25rem;
      height: 3.125rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      box-shadow: 0 5px 5px #8a8a8a;
    }
    .sanjiao {
      width: 0;
      height: 0;
      position: absolute;
      border: 10px solid;
      z-index: 999;
      top: 3rem;
      left: 1rem;
      border-color: #fff transparent transparent transparent;
    }
  }
}
.footer {
  // height: 8vh;
  width: 100vw;
  position: fixed;
  bottom: 0rem;
  background-color: #fff;
  padding: 0.875rem;
  button {
    height: 6vh;
    width: 7.5rem;
    color: #fff;
    background-color: #0ac4c5;
    outline: 0;
    border: 0;
    float: right;
  }
}
</style>
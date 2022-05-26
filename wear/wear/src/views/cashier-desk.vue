<template>
  <div>
    <!-- 头部导航栏开始 -->
    <header class="header-box">
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
      <span>收银台</span>
    </header>
    <!-- 头部导航栏结束 -->
    <!-- 倒计时区域开始 -->
    <div class="pay-box">
      <p>实付金额</p>
      <span class="rmb">¥</span>
      <span class="money">{{Number(total.price).toFixed(2)}}</span>
      <div class="timeBox">
        <p v-if="show">支付剩余时间</p>
        <p v-if="!show">订单超时请重新下单</p>
        <van-count-down :time="time" v-show="timeShow" v-if="xiaoshi">
          <span class="block">{{ m }}</span>
          <span class="colon">:</span>
          <span class="block">{{ s }}</span>
        </van-count-down>
      </div>
    </div>
    <!-- 倒计时区域结束 -->
    <!-- 支付方式开始 -->
    <div class="payment">
      <p>选择支付方式</p>
      <van-radio-group v-model="radio" icon-size="20">
        <van-cell-group> 
          <van-cell
            title="支付宝支付"
            :icon="require('../assets/img/dewuImage/alipay.png')"
            clickable
            @click="changetitle()"
          >
            <template #right-icon>
              <van-radio checked-color="#30afb8" clickable  name="1" />
            </template>
          </van-cell>
          <van-cell
            title="微信支付"
            :icon="require('../assets/img/dewuImage/wx_pay.png')"
            clickable
            @click="changetitle()"
          >
            <template #right-icon>
              <van-radio checked-color="#30afb8" name="2" />
            </template>
          </van-cell>
          <van-cell
            title="花呗支付"
            :icon="require('../assets/img/dewuImage/huabei.png')"
            clickable
            @click="changetitle()"
          >
            <template #right-icon>
              <van-radio checked-color="#30afb8" name="3" />
            </template>
          </van-cell>
          <van-cell
            title="花呗分期"
            :icon="require('../assets/img/dewuImage/hbfq.png')"
            clickable
            @click="changetitle()"
          >
            <template #right-icon>
              <van-radio checked-color="#30afb8" name="4" />
            </template>
          </van-cell>
          <van-cell
            title="微信好友支付"
            :icon="require('../assets/img/dewuImage/ic_we_chat_friend_pay.png')"
            clickable
            @click="changetitle()"
          >
            <template #right-icon>
              <van-radio checked-color="#30afb8" name="5" />
            </template>
          </van-cell>
          <van-cell
            title="银行卡支付"
            :icon="require('../assets/img/dewuImage/ic_bank_card.png')"
            is-link
            value="添加新卡"
            clickable
            @click="radio = '6'"
          ></van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <!-- 支付方式结束 -->
    <van-dialog
      v-model="show1"
      :title="'支付剩余时间'+this.m+':'+this.s"
      show-cancel-button
      message="因价格可能波动，请在有效时间内完成支付。预期可能错过当前商品"
      confirmButtonText="继续支付"
      cancelButtonText="稍后再付"
      confirmButtonColor="#30afb8"
      cancelButtonColor="#8a8a8a"
      @cancel="cancel"
    ></van-dialog>
    <!-- 立即支付开始 -->
    <button 
    v-if="btnShow" class="pay"
    @click="paymoney"
    >{{n}}{{Number(total.price).toFixed(2)}}
    </button>
    <!-- 立即支付结束 -->
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
import Vue from "vue";
import { Toast, Dialog } from "vant";
// 全局注册
Vue.use(Dialog);
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  data() {
    return {
      show1: false,
      money: 999,
      xiaoshi: true,
      time: 0,
      show: true,
      timeShow: true,
      nowTime: new Date().valueOf(),
      xiadanTime: 0, // 下单时间
      exTime: 0, // 过期时间
      chaTime: 0, // 时间差
      m: 0, // 分
      s: 0, // 秒
      n: "支付宝支付¥",
      oldTime: 1600523618962,
      radio:"1",
      value:"name",
      btnShow: true,
      t:null
    };
  },
  computed: {
    ...mapState(["total","loginUser"])
  },
  mounted() {
    var title2 = document.getElementsByClassName("van-dialog__header")[0];
    if (this.s < 2) {
      title2.innerHTML = "支付剩余时间 00:01";
    }
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
    this.t = setInterval(res => {
      this.chaTime -= 1000;
      this.m = Math.floor(this.chaTime / 1000 / 60);
      this.m = this.m < 10 ? "0" + this.m : this.m;
      this.s = Math.floor((this.chaTime / 1000) % 60);
      this.s = this.s < 10 ? "0" + this.s : this.s;
      // console.log(this.m);
      // console.log(this.s);
      if (this.chaTime <= 0) {
        clearInterval(t);
        this.show = false;
        this.xiaoshi = false;
      }
    }, 1000);
  },
  methods: {
    ...mapMutations(["addUserMsg"]),
    back() {
      this.show1 = true;
      // Dialog.confirm({

      //   message:"因价格可能波动，请在有效时间内完成支付。逾期可能错过当前商品",
      //     confirmButtonText: "继续支付",
      //     confirmButtonColor: "#30afb8",
      //     cancelButtonText: "稍后再付",
      //     width: "280px"
      // })
      // this.$dialog
      //   .confirm({
      //     title: `支付剩余时间${this.m}:${this.s}`,
      //     message:
      //       "因价格可能波动，请在有效时间内完成支付。逾期可能错过当前商品",
      //     confirmButtonText: "继续支付",
      //     confirmButtonColor: "#30afb8",
      //     cancelButtonText: "稍后再付",
      //     width: "280px"
      //   })
      //   .then(() => {
      //     // on confirm
      //   })
      //   .catch(() => {
      //     // on cancel
      //     this.$router.push("/order-details");
      //   });
    },
    // finish() {
    //   (this.show = false), (this.timeShow = false);
    // }
    cancel() {
      this.$router.push("/order-details");
    },
    changetitle(radio){
       if (this.radio == 1) {
      this.n = "支付宝支付¥";
    } else if (this.radio == 2) {
      this.n="微信支付¥"
    }else if(this.radio==3){
      this.n="花呗支付¥"
    }else if(this.radio == 4){
      this.n = "花呗分期支付¥"
    }else{
      this.n = "微信好友代付"
    }
    },
    // 付款
    paymoney(){
     console.log(111);
    // console.log(Number(this.total.price));
    this.axios
        .post("/paymoney",`pay=${Number(this.total.price)}&uid=${this.loginUser.uid}&order_time=${localStorage.getItem('order_time')}`)
        .then((res) => {
          let userMsg = res.data;
          console.log(userMsg);
          if(userMsg.code==0){
            Toast(userMsg.msg)
          }else{
            clearInterval(this.t)
             this.$router.push("/me");
             Toast(userMsg.msg)
          }
          // this.addUserMsg(userMsg);
        });
   }
  }
};
</script>

<style lang="scss" scoped>
.header-box {
  height: 8vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: #000;

  img {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: 1.25rem;
  }

  span {
    display: inline-block;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    bottom: 0.8rem;
  }
}
.pay-box {
  text-align: center;
  line-height: 1.3;
  margin: 1.25rem;
  .rmb {
    color: #000;
    font-size: 1.5rem;
    font-weight: 800;
    margin-right: 0.3125rem;
  }
  .money {
    font-size: 2.25rem;
    color: #000;
    font-weight: 800;
    margin: 0.625rem;
  }
}
.timeBox {
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgb(240，, 240, 240);
  p {
    margin-right: 0.625rem;
  }
  .colon {
    display: inline-block;
    margin: 0 4px;
    color: #000;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #000;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    background-color: rgb(240，, 240, 240);
  }
}
.payment {
  padding: 1.25rem;
  p {
    color: #000;
    font-size: 17px;
    margin-top: -1rem;
    margin-bottom: 1.25rem;
  }
}
.pay {
  padding: 0.8rem;
  width: 95vw;
  background-color: #01c2c3;
  display: block;
  margin: 1.25rem auto;
  border: none;
  color: #fff;
}
</style>
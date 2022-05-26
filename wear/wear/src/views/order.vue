<template>
  <div v-if='sort[0]'>
    <header class="header-box">
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
      <span>确认订单</span>
    </header>
    <div class="dzbox" v-if='!order_msg[0]' >
      <van-cell class="dz" title="添加收货地址" is-link to='/edit-address'></van-cell>
      <img src="../assets/img/dewuImage/dingwei.png" alt />
    </div>
    <div class="dzbox" v-else-if="order_msg.length<=1">
      <van-cell class="dz" v-if='order_msg[0]' is-link to="/address" :value='order_msg[0].cellphone.substr(0,3)+"****"+order_msg[0].cellphone.substr(7)' :label='order_msg[0].province+order_msg[0].address'>
        <span slot='title'>收货人:{{order_msg[0].receiver}}</span>
      </van-cell>
      <img src="../assets/img/dewuImage/dingwei.png" alt />
    </div>
    <div class="dzbox" v-else>
      <van-cell class="dz" v-if='order_msg[index]' is-link to="/address" :value='order_msg[index].cellphone.substr(0,3)+"****"+order_msg[index].cellphone.substr(7)' :label='order_msg[index].province+order_msg[index].address'>
        <span slot='title'>收货人:{{order_msg[index].receiver}}</span>
      </van-cell>
      <img src="../assets/img/dewuImage/dingwei.png" alt />
    </div>
    <table>
      <td>
        <img src="../assets/img/details/shopping.png" alt />
      </td>
      <td>
        <img class="i2" src="../assets/img/details/shopping.png" alt />
      </td>
    </table>
    <div class="product">
      <img v-lazy="require(`../assets/img/commodity/${sort[0].img}`)"/>
    <span>「 {{total.genre}}」{{sort[0].dtitle}}</span>
      <div>
        <span class="span1">{{total.size}}</span>
        <span class="span2">数量 × 1</span>
      </div>
      <div class="price">
        <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
        <span>¥ {{Number(total.price)}}</span>
      </div>
    </div>
    <div class="youhui">
      <span>优惠规则</span>
      <img src="../assets/img/dewuImage/yiwen.png" alt />
      <div class="span2">
        <span>合计</span>
        <span>¥{{Number(total.price).toFixed(2)}}</span>
      </div>
    </div>
    <div class="detail">
      <p>1、闪电直发商品均为得物App平台卖家寄售入库， 并经过得物App平台查验鉴别通过的商品， 买家付款后预计36小时内由平台直接发出。</p>
      <p>2、每件交易的商品均由平台针对事物进行鉴别，鉴于商品价格波动性，同时每个款式每个尺码的商品出售时仅有一件等情况，故不支持退换差价。</p>
      <p>3、温馨提示：商品价格由市场供需决定，可能存在波动，请理性消费。查看详情 ></p>
      <p>4、个人卖家ID：LinYao1113 ，商品属于个人全新闲置物品，市场价格存在波动，故不适用7天无理由退货。</p>
      <p>
        提交订单表示同意
        <span>买家须知</span>
      </p>
    </div>
    <div class="baoxian">
      <img src="../assets/img/dewuImage/dewu_logo_gray_32x32.png" alt />
      <span>本订单有得物App × 人保财险联合保障</span>
    </div>
    <div class="submit">
      <span class="s1">实付款：¥</span>
      <span class="s2">{{Number(total.price).toFixed(2)}}</span>
      <button @click='pay'>提交订单</button>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  data() {
    return {
      // order_msg:{}
    };
  },
  computed:{
    ...mapState(['sort','total','order_msg','index'])
  },
  mounted(){
    // this.getDetail() ;
    this.getAddress()
    // this.getIndex(0)
  },
  methods: {
    ...mapActions(['getDetail','getAddress']),
   ...mapMutations(['order_detail','getIndex']),
    back() {
      this.$router.push({
                  name: "details",
                  query: { did: this.sort[0].did },
                });;
    },
    pay(){
      if(this.order_msg.length<1){
        this.$notify({
             duration: 1000,
             color: '#fff',
            background: 'rgba(0,0,0,.4)',
            message:'请选择收货地址'
           });
      }else{
      this.axios.get(`/shop/status?user_id=${this.order_msg[0].user_id}&status=1`).then(res=>{
        // console.log(res.data)
        if(res.data.length>0){
          this.$dialog
        .confirm({
          title: "你有未支付的订单",
          message:'支付或取消后可提交新的订单',
          confirmButtonColor: "#30afb8",
          confirmButtonText:'查看订单',
        })
        .then(() => {
          // on confirm
          this.$router.push('/order-details')
        })
        .catch(() => {
          // on cancel
        });
        }else{
        this.$router.push('/cashier-desk')
        console.log(this.order_msg[this.index])
        this.order_detail(this.order_msg[this.index])
        // console.log(this.order_msg[this.index])
      localStorage.setItem('xiadanTime',(new Date()).valueOf())
       this.axios
                .get(
                  `/shop/pay_detail?did=${this.sort[0].did}&size=${this.total.size}`
                )
                .then((res) => {
                  // console.log(res.data);
      this.axios.post('/shop/pay',`user_id=${this.order_msg[0].user_id}&address_id=${this.order_msg[this.index].aid}&status=1&der_time=${(new Date()).valueOf()}&product_id=${res.data[0].sdid}`).then(res=>{
        // console.log(res.data[res.data.length-1].order_time)
        localStorage.setItem('order_time',res.data[res.data.length-1].order_time)
      })
        })
        }
      })
    }
    },
  },
  // beforeRouteLeave(to,from,next){
  //   console.log(to)
  //   console.log(from)
  //     if(to.path=='/order-details'){
  //       console.log(11111111)
  //       to.meta.keepAlive=true
  //     }
  //     next()
  //   },
  //    beforeRouteEnter(to,from,next){
  //     next()
  //   }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
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
.dz {
  font-size: 18px;
  padding-left: 3.125rem;
}
.dzbox {
  position: relative;
  img {
    position: absolute;
    left: 1rem;
    top: 0.625rem;
  }
}
table {
  img {
    height: 2px;
    width: 50vw;
  }
  .i2 {
    margin-left: -10px;
    width: 52vw;
  }
}
.product {
  position: relative;
  padding: 1rem;
  border-bottom: 0.5rem solid #f5f5f9;
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
}
.price {
  position: relative;
  top: 50px;
  margin-bottom: 10px;
  padding: 1.5rem;
  img {
    width: 1.2rem;
    position: absolute;
    top: 1.5rem;
  }
  span {
    position: absolute;
    color: #000;
    top: 2.3rem;
    font-size: 17px;
    font-weight: 600;
  }
}
.youhui {
  border-bottom: 0.5rem solid #f5f5f9;
  position: relative;
  padding: 0.625rem;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #8a8a8a;
  img {
    width: 1.5rem;
    vertical-align: text-bottom;
  }
  .span2 {
    position: absolute;
    right: 1.25rem;
    span:last-child {
      color: #333;
      margin-left: 0.3125rem;
      font-size: 16px;
      font-weight: 600;
    }
  }
}
.detail {
  line-height: 1.5;
  margin: 0.9375rem 0.9375rem 0 0.9375rem;
  padding-bottom: 0.9375rem;
  font-size: 14px;
  border-bottom: 1px solid #f1f1f1;
  color: #8e8e9b;
  span {
    color: #0ac4c5;
  }
}
.baoxian {
  font-size: 14px;
  color: #8e8e9b;
  border-bottom: 1px solid #f1f1f1;
  padding: 0.625rem;
  img {
    width: 1.5rem;
    vertical-align: middle;
    margin-right: 0.625rem;
  }
}
.submit{
  color: #ff5a5f;
  padding: .8rem;
  position: relative;
  display: flex;
  align-items: center;
  .s1{
    font-size: 13px;
    font-weight: 600;
  }
  .s2{
    font-weight: 600;
    font-size: 20px;
  }
  button{
    border: none;
    outline: none;
    color: #fff;
    background-color: #01c2c3;
    padding: 10px 15px;
    position: absolute;
    right: 1.25rem;
  }
}
</style>
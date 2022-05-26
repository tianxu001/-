<template>
  <div>
    <header class="header-box">
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
      <span>我的购买</span>
    </header>

    <van-tabs  color="#202020">
      <van-tab name="1">
        <div class="box" v-if="my_order.length<0">
          <img src="../assets/img/dewuImage/img_empty_my_trace.png" alt />
          <p>暂无相关订单</p>
        </div>
      <div v-else>
        <div class="product" v-for="(item,index) of my_order" :key='index'>
          <!-- <p v-if='!my_order_del[index].status==0'>交易成功</p>-->
          <!-- <button @click="pay">立即付款</button>  -->
          <img v-lazy="require(`../assets/img/commodity/${item.img}`)" alt  @click="del(index)"/>
          <span>{{item.dtitle}}</span>
        <div>
         <span class="span1">{{my_order_detail[index].specs}}</span>
        <span class="span2">数量 × 1</span>
        </div>
        <div class="price">
          <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
          <span>¥ {{Number(my_order_detail[index].price)}}</span>
        </div>
        
      </div>
  </div>
      </van-tab>
      <!-- <van-tab title="代付款" name="2">
         <div class="box" v-if='my_order_pay.length<0'>
          <img src="../assets/img/dewuImage/img_empty_my_trace.png"  alt />
          <p>暂无相关订单</p>
        </div>
        <div v-else>
        <div class="product" v-for="(item,index) of my_order_pay" :key='index'>
          <img v-lazy="require(`../assets/img/commodity/${item.img}`)" @click="see(index)"  alt />
          <span>{{item.dtitle}}</span>
        <div>
         <span class="span1">{{my_order_detail_pay[index].specs}}</span>
        <span class="span2">数量 × 1</span>
        </div>
        <div class="price">
          <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
          <span>¥ {{Number(my_order_detail_pay[index].price)}}</span>
      </div>
      <button  @click="pay">立即付款</button>
      </div>
      </div>
      </van-tab> -->
      <!-- <van-tab title="代发货" name="3">
         <div class="box">
          <img src="../assets/img/dewuImage/img_empty_my_trace.png" alt />
          <p>暂无相关订单</p>
        </div>
      </van-tab>
      <van-tab title="待收货" name="4">
         <div class="box">
          <img src="../assets/img/dewuImage/img_empty_my_trace.png" alt />
          <p>暂无相关订单</p>
        </div>
      </van-tab> -->
    </van-tabs>
  </div>
</template>
<script>
// import { Empty } from "vant";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      my_order: [],
      my_order_detail:[],
      my_order_del:[],
       my_order_pay: [],
      my_order_detail_pay:[],
      my_order_Pay_aid:[]
    };
  },
  computed: {
    ...mapState(["loginUser"]),
  },
  mounted() {
    console.log(this.my_order)
    this.axios
      .get(`/shop/my_order?user_id=${this.loginUser.uid}`)
      .then((res) => {
        this.my_order_del=res.data
        for (var item of res.data) {
          this.axios
            .get(`/shop/order_detail?sdid=${item.product_id}`)
            .then((res) => {
              // console.log(res.data[0])
                  this.my_order_detail.push(res.data[0]);
              this.axios
                .get(`/shop/order_sort?did=${res.data[0].spid}`)
                .then((res) => {
                  console.log(res.data)
                  this.my_order.push(res.data[0]);
                });
            });
            }
      });
            this.axios
      .get(`/shop/status?user_id=${this.loginUser.uid}&status=1`)
      .then((res) => {
        this.my_order_Pay_aid=res.data
        for (var item of res.data) {
          this.axios
            .get(`/shop/order_detail?sdid=${item.product_id}`)
            .then((res) => {
              // console.log(res.data[0])
                  this.my_order_detail_pay.push(res.data[0]);
              this.axios
                .get(`/shop/order_sort?did=${res.data[0].spid}`)
                .then((res) => {
                  // console.log(res.data)
                  this.my_order_pay.push(res.data[0]);
                });
            });
        }
      });
      // console.log(this.my_order_detail)
  },
  methods: {
    ...mapMutations(['getDelAid']),
    back() {
      this.$router.go(-1);
    },
    see(index){
      this.getDelAid(this.my_order_del[index].aid)
      this.$router.push('/order-details2')
    },
    del(index){
      this.getDelAid(this.my_order_del[index].aid)
      if(!this.my_order_del[index].status==1){
      // console.log(this.my_order_del[index].aid)
      this.$router.push('/order-details1')
      }else{
        this.$router.push('/order-details2')
      }
    },
    pay(){
      this.$router.push('/cashier-desk1')
    }
  },
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
.product {
  border-bottom: 1px solid #eee;
  position: relative;
  padding: 0.5rem 1rem;
  border-bottom: 0.875rem solid #f7f8fa;
  
  > p {
    border-bottom: 1px solid #eee;
    font-size: 0.8rem;
    // padding: 0.9375rem;
    // padding: 1.25rem;
    // margin: 0.625rem;
  }
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
.box {
  height: 100vh;
  position: relative;
  img {
    width: 150px;
    position: absolute;
    top: 5rem;
    left: 30%;
  }
  & > p {
    color: #d1cde1;
    position: absolute;
    display: block;
    top: 15.5rem;
    left: 36%;
  }
}
 button {
    height: 6vh;
    width: 7.5rem;
    color: #fff;
    background-color: #0ac4c5;
    outline: 0;
    border: 0;
   position: absolute;
   right: 0rem;
   bottom: 0;
  }
</style>
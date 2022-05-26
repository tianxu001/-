<template>
<div>
  
    <header class="header-box">
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
      <span>自行搭配页面</span>
    </header>
    <img style="width:100vw;margin-bottom:-5px" src="../assets/img/dewuImage/111.png" alt />
    <van-notice-bar
      left-icon="volume-o"
      text="商品价格有市场供需决定，可能存在波动，请理性消费"
      color="#8a8a8a"
      background="#fbfbfd"
    />
    <div v-if='collect.length<0'>
    <div class="box">
      <img src="../assets/img/dewuImage/du_trend_circle_active_empty_playholder.png" alt />

      <p>您还没有收藏商品</p>
      <p>来这查看价格起伏，设置价格提醒</p>
      <button>去逛逛</button>
    </div>
    <p class="mayLike">你可能喜欢</p>
    <div class="shangpin">
    </div>
  </div>
  <div v-else>
       <div class="product" v-for="(item,index) of collect" :key='index' @click='back_detail(index)'>
      <img :src="require(`../assets/img/commodity/${item.img}`)" alt />
      <!-- <span>{{item.dtitle}}</span>
      {{item.type}} -->
      <div>
        <!-- <span class="span1">￥{{item.d_price}}</span> -->
      </div>
      <!-- <div class="price">
        <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
        <span>¥ {{Number(order_detail.price)}}</span> -->
      </div>
  </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  data(){
    return{
      collect:[]
    }
  },
  computed:{
    ...mapState(['loginUser']),
  },
  mounted(){
    // console.log(this.loginUser.uid)
    this.axios.get(`/shop/getAll_collect?user_id=${this.loginUser.uid}`).then(res=>{
       let collectCount=res.data.length;
       this.changeCount(collectCount);
       console.log(res.data);
      for(var item of res.data){
        this.axios.get(`/shop/order_sort?did=${item.product_id}`).then(res=>{
            this.collect.push(res.data[0])
        })
      }
    })
  },
  methods: {
    ...mapMutations(['changeCount']),
    back() {
      this.$router.go(-1);
    },
    back_detail(index){
      this.$router.push({
        path:'/details',
        query:{did:this.collect[index].did}
      })
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
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
.box {
  text-align: center;
  img {
    display: -webkit-flex;
    margin-left: calc(50% - 5rem);
    width: 10rem;
    height: 10rem;
    margin-top: calc(30% - 5rem);
    margin-bottom: 1.25rem;
  }
  p{
    color: #aaaabb;
    margin: 0.625rem;
    text-align: center;
  }
  button{
    background-color: #fff;
    outline: none;
    padding: 0.625rem 1rem;
    margin: 1.25rem;
    padding-left: 1rem;
    border: 1px solid #aaabbb ;
    text-align: center;
    margin-bottom: 2.5rem;
  }

}
.product {
  border-bottom: 1px solid #eee;
  position: relative;
  padding: 0.5rem 7rem;
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
.mayLike{
  margin-left: 1.25rem;
  color: #000;
}
</style>
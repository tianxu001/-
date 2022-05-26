<template>
  <div>
    <header class="header-box" v-if='order_msg[0]'>
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
      <span>地址管理</span>
      <!-- <span class="s2">管理</span> -->
    </header>
    <!-- <div class="empty">
      <img src="../assets/img/dewuImage/empty1.png" alt />
      <p>暂无收货地址</p>
      <button @click="toEdit">添加地址</button>
    </div> -->
     <div class="dzbox" v-for='(item,index) of order_msg' :key='index' @click='order(index)'>
      <van-cell class="dz" v-if='item.cellphone'  :label='item.receiver +"    "+ item.cellphone.substr(0,3)+"****"+item.cellphone.substr(7)'>
        <span slot='title'>{{item.province+item.address}}</span>
        <img src="../assets/img/dewuImage/media_edit.png" alt="" slot='right-icon' @click='edit1($event,index)'>
      </van-cell>
    </div>
    <button @click='edit2'>添加新地址</button>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  data(){
    return{
      // order_msgs:[]
    }
  },
  computed:{
    ...mapState(['order_msg'])
  },
  mounted(){
    this.getAddress()
  },
  methods: {
...mapActions(['getAddress']),
...mapMutations(['getIndex']),
    back() {
      this.$router.go(-1);
    },
    toEdit(){
      this.$router.push("/edit-address")
    },
    edit1(e,index){
      e.stopPropagation()
      this.$router.push('/edit-address1')
      this.getIndex(index)
    },
    edit2(){
      this.$router.push('/edit-address2')
    },
    order(index){
        this.getIndex(index)
        this.$router.push('/order')
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
    text-align: center;
    font-size: 18px;
    font-weight: 500;
  }
  .s2 {
    position: absolute;
    font-size: 16px;
    color: #30afb8;
    right: 1.25rem;
  }
}
.dzbox{
  // border-bottom:.5px solid #999 ;
  .dz{
  img{
    width: 1.5rem;
    height: 1.5rem;
  }
}
}
button{
  width: 90vw;
  height: 3.125rem;
  background-color: #12c0c1;
  outline: none;
  border: 0;
  color: #fff;
  position: fixed;
  bottom: 0.625rem;
  left: 50%;
  margin-left:-45vw ;
}
</style>
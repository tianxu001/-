<template>
  <div>
    <div class="searchBox">
      <input id="input" v-on:keyup.enter="search_item" type="text" :value="inputVal" />
      <span @click="back">取消</span>
    </div>
    <div class="shopbox" v-if="search.length!=0" >
      <div class="shopitem" v-for="(item,index) in search " :key="index">
        <router-link :to="{path:'/details',query:{did:item.did}}">
          <div class="shopcontent">
            <img v-lazy="item.img" />
            <div class="shopname">{{item.dtitle}}</div>
            <div class="shopprice">¥ {{item.d_price}}</div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="content" v-else>
      <img src="../assets/img/dewuImage/ic_empty_community_search.png" alt />
      <p>查无此类商品</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.searchBox {
  position: fixed;
  display: flex;
  align-items: center;
  background: #fff;
  span {
    width: 50px;
    display: block;
    margin-left: 6%;
    font-weight: bolder;
  }
}
input {
  margin: 0.315rem 0;
  width: 80vw;
  height: auto;
  display: block;
  margin-left: 5vw;
  height: 4vh;
  outline: none;
  border: none;
  background: url("../assets/img/index/search/search (6).png") no-repeat;
  background-position: 2% 42%;
  background-color: rgb(240, 240, 240);
  border-radius: 8px;
  text-indent: 30px;
}
.shopbox{
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column: 5px;
  padding-top:10% ;
}
.shopitem {
  width: 100%;
  height: 20%;
  margin: 0 auto;
}
.shopcontent {
  width: 100%;

  img {
    width: 80%;
    margin: 30% 10% 10% 10%;
  }
  .shopname {
    color: #666;
    display: block;
    font-size: 0.875rem;
    text-align: start;
    margin: 0 6%;
  }
  .shopprice {
    font-size: 1rem;
    font-weight: bolder;
    color: #000;
    display: block;
    margin: 10% 5% 5% 5%;
  }
}
.content {
  position: relative;
  display: flex;
  img {
    width: 12.5rem;
    position: absolute;
    top: 6.25rem;
    left: 23%;
  }
  p {
    color: #bfbfbf;
    position: absolute;
    top: 19.5rem;
    left: 42%;
  }
}
</style>
<script>
import {mapState} from "vuex" 
export default {
  data() {
    return {
      search: [],
    };
  },
  computed:{
    ...mapState(["inputVal"])
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    search_item() {
      this.search = [];
      let input = document.getElementById("input");
      let $search = input.value;
      this.axios.get("/search/" + $search).then((res) => {
        // console.log(res.data)
        let data = res.data;
        data.forEach((item) => {
          item.img = require("../assets/img/commodity/" + item.img);
          this.search.push(item);
        });
      });
      // console.log(this.search);
    },
  },
  mounted() {
    // console.log(this.inputVal)
    this.search_item()
  },
};
</script>
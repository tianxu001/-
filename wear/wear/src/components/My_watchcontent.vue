<template>
  <div class="content">
    <div class="shoplist">
      <div v-for="(item,index) in shopping_watchsort" :key="index">
        <router-link to="/">
          <img v-lazy="item.wimg" />
          <p>{{item.wmessage}}</p>
        </router-link>
      </div>
    </div>
    <router-link to="/">
      <div class="advise">
        <img src="../assets/img/index/shop/watch.png" alt />
      </div>
    </router-link>
    <div class="shoplist clear_top">
      <div v-for="(item,index) in gridtextlist" :key="index">
        <router-link :to="item.url">
          <img v-lazy="item.photo" />
          <p>{{item.text}}</p>
        </router-link>
      </div>
    </div>
    <!-- 购买栏开始 -->
    <van-grid :column-num="2">
      <div class="shopitem clear_top" v-for="(item,index) in sort " :key="index">
        <router-link to="/">
          <div class="shopcontent">
            <img v-lazy="item.img" />
            <div class="shopname">{{item.dtitle}}</div>
            <div class="shopprice">¥ {{item.d_price}}</div>
          </div>
        </router-link>
      </div>
    </van-grid>
    <!-- 购买栏结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopping_watchsort: [],
      sort: [],
      gridtextlist: [
        {
          text: "NIKE",
          photo: require("../assets/img/index/shop/11.png"),
          url: "/",
        },
        {
          text: "MLB",
          photo: require("../assets/img/index/shop/12.png"),
          url: "/",
        },
        {
          text: "GUUCI",
          photo: require("../assets/img/index/shop/13.png"),
          url: "/",
        },
        {
          text: "Fila",
          photo: require("../assets/img/index/shop/14.png"),
          url: "/",
        },
        {
          text: "LV",
          photo: require("../assets/img/index/shop/15.png"),
          url: "/",
        },
        {
          text: "AMBUSH",
          photo: require("../assets/img/index/shop/16.png"),
          url: "/",
        },
        {
          text: "Guuka",
          photo: require("../assets/img/index/shop/17.png"),
          url: "/",
        },
        {
          text: "Supreme",
          photo: require("../assets/img/index/shop/18.png"),
          url: "/",
        },
        {
          text: "COACH",
          photo: require("../assets/img/index/shop/19.png"),
          url: "/",
        },
        {
          text: "|||",
          photo: require("../assets/img/index/shop/20.png"),
          url: "/",
        },
      ],
      time: 30 * 60 * 60 * 1000,
    };
  },
  mounted() {
    this.axios.get("/shop/shopping_watchsort").then((res) => {
      let data = res.data.results;
      data.forEach((item) => {
        item.wimg = require("../assets/img/commodity/" + item.wimg);
        this.shopping_watchsort.push(item);
      });
    });

    this.axios.get("/shop/sort_id?fid=3").then((res) => {
      let data = res.data;
      data.forEach((item) => {
        item.img = require("../assets/img/commodity/" + item.img);
        this.sort.push(item);
      });
    });
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
}
.shoplist {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 50% 50%;
  height: 20%;
  margin-bottom: 5%;
   margin-top: 22%;
  a {
    color: #000;
    display: block;
    display: flex;
    flex-flow: column;
    align-items: center;
    img {
      width: 70%;
      margin: 10% 10%;
    }
    p {
      font-size: 0.75rem;
      font-weight: bolder;
      display: block;
    }
  }
}
.clear_top{
  margin:0;
}
.advise {
  width: 100%;
  img {
    width: 100%;
  }
}

.shopitem {
  width: 49%;
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .shopprice {
    font-size: 1rem;
    font-weight: bolder;
    color: #000;
    display: block;
    margin: 10% 5% 5% 5%;
  }
}
</style>
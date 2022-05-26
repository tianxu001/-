<template>
  <div class="content">
    <!-- 轮播开始 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/img/index/shop/1.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/index/shop/2.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/index/shop/3.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/index/shop/4.png" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播结束 -->
    <router-link style="color:#000" to="/">
      <div class="promit">
        <div>
          <img src="../assets/img/index/shop/ic_mall_brand_genuine_black.png" alt />
          <span>正 品 保 障</span>
        </div>
        <div>
          <img src="../assets/img/index/shop/ic_mall_brand_check_black.png" alt />
          <span>逐 渐 查 验</span>
        </div>
        <div>
          <img src="../assets/img/index/shop/ic_mall_brand_identify_black.png" alt />
          <span>多 重 鉴 别</span>
        </div>
      </div>
    </router-link>
    <div class="shoplist">
      <div v-for="(item,index) in gridtextlist" :key="index">
        <router-link :to="item.url">
          <img v-lazy="item.photo" />
          <p>{{item.text}}</p>
        </router-link>
      </div>
    </div>
    <router-link to="/">
      <div class="advise">
        <img src="../assets/img/index/shop/manjian.gif" alt />
      </div>
    </router-link>
    <!-- 秒杀开始 -->
    <div class="miaosha">
      <div class="item_1">
        <img class="img_1" src="../assets/img/index/shop/ic_original_icon.png" alt />
        <div>
          <span>Air Jordan 5 Apple Green 黑绿 俄勒冈</span>
          <p>￥1599</p>
        </div>
        <img class="img_2" src="../assets/img/index/shop/98cefac3c4906e0ef7d461c12511ff2.png" alt />
      </div>
      <div class="item_2">
        <div>
          <p class="qiangjuan_text">抢卷</p>
          <div class="qiangjuan">
            <p>￥888</p>
            <span>无门槛使用</span>
          </div>
        </div>
        <div>
          <div class="daojishi">
            <div class="_21">21点场</div>
            <div class="time">
              <van-count-down :time="time" />
            </div>
          </div>
          <div class="xiaoxiong">
            <span>优惠卷</span>
            <p>￥888</p>
          </div>
        </div>
      </div>
      <div class="item_3">
        <div>
          <p>0元抽奖</p>
          <div class="left">
            <img src="../assets/img/index/shop/left.png" alt />
            <p>今日</p>
          </div>
        </div>
        <div class="right">
          <div>每日抽鞋</div>
          <img src="../assets/img/index/shop/right.png" alt />
          <p>明日</p>
        </div>
      </div>
    </div>
    <!-- 秒杀结束 -->


    
    <!-- 购买栏开始 -->
    <van-grid :column-num="2" >
      <div class="shopitem" v-for="(item,index) in sort " :key="index">
        <router-link :to="{name:'details', query: {did:index+1}}" >
          <div class="shopcontent" @click='part(item)'>
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
import { mapActions } from 'vuex';
export default {
  data() {
    return {
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
    this.axios.get("/shop/sort").then((res) => {
      let data = res.data;
      console.log(data);
      data.forEach((item) => {
        // 更改图片地址
        item.img = require("../assets/img/commodity/" + item.img);
        this.sort.push(item);
      });
    });
  },
  methods:{
    ...mapActions(['getDetail']),
    part(item){
      // this.getDetail(item.did)
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
}
.van-swipe{
  margin-top: 5rem;
}
.my-swipe .van-swipe-item {
  width: 100vw;
  color: #fff;
  font-size: 1.25rem;
  text-align: center;
  img {
    width: 100%;
  }
}
// .van-grid-item__text {
//   font-weight: bold !important;
//   color: #000 !important;
// }
.van-swipe__indicators {
  top: 7.125rem;
  left: 92% !important;
}
.shoplist {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 50% 50%;
  height: 20%;
  margin-bottom: 5%;
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
.promit {
  display: grid;
  grid-template-columns: 31% 31% 31%;
  grid-column-gap: 2%;
  height: 1.875rem;
  align-items: center;
  justify-items: center;
  img {
    margin: 0 0.625rem -0.125rem 0.75rem;
    width: 0.8125rem;
  }
  span {
    font-size: 0.75rem;
    font-weight: bold;
  }
}
.advise {
  width: 100%;
  img {
    width: 100%;
  }
}
// 秒杀样式
.miaosha {
  width: 100vw;
  height: 30vh;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 40% 60%;
  grid-row-gap: 5px;
  grid-column-gap: 2px;
  margin-bottom: 10px;
  .item_1 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    
    .img_1 {
      width: 20%;
      margin-left: 2%;
    }
    div {
      width: 45%;
      overflow: hidden;
      /*超过的部分用 ... 显示*/
      text-overflow: ellipsis;
      /*取消文字自动换行，如果不加则文字会自动换行使得高度改变*/
      white-space: nowrap;
      margin: 0 5%;
      font-weight: bold;
      color: #000;
      span {
        font-size: 0.8125rem;
        display: block;
        margin-bottom: 0.3125rem;
      }
    }
    .img_2 {
      width: 26%;
      margin-right: 2%;
    }
  }
  .daojishi {
    display: flex;
    justify-content: center;
    margin: 0.625rem 0 0.6875rem 0;
  }
  .item_2 {
    display: grid;
    grid-template-columns: 40% 60%;
    place-content: center;
    font-weight: bolder;
    .qiangjuan_text {
      font-size: 18px;
      display: block;
      color: #000;
      margin: 10% 0 0 10%;
    }
    ._21 {
      width: 3.4375rem;
      height: 1.25rem;
      background: #000;
      color: #fff;
      font-size: 0.75rem;
      text-align: center;
      line-height: 1.25rem;
    }
    .time {
      width: 3.125rem;
      height: 0.9375rem;
      border: 0.0625rem solid #e8e8e8;
      .van-count-down {
        font-size: 10px;
      }
    }
    .qiangjuan {
      margin: 1.875rem 0 0 10%;

      P {
        color: red;
      }
      span {
        font-size: 0.75rem;
      }
    }
    .xiaoxiong {
      width: 5.875rem;
      height: 3.8125rem;
      background: url("../assets/img/index/shop/zhekou.png") no-repeat;
      background-size: 100%;
      color: rgb(179, 236, 236);
      text-align: center;
      margin: 0 auto;
      span {
        display: block;
        padding: 0.625rem 0 0.3125rem 0;
        font-size: 0.625rem;
      }
    }
  }
  .item_3 {
    display: grid;
    grid-template-columns: 50% 50%;
    place-content: center;
    font-size: 18px;
    font-weight: bolder;
    color: #000;
    text-align: center;
    .left {
      img {
        margin: 10px 0;
        width: 80%;
      }
      p {
        color: #666;
        font-weight: normal;
        font-size: 14px;
      }
    }
    .right {
      div {
        width: 56px;
        height: 20px;
        background: #000;
        color: #fff;
        font-weight: bolder;
        font-size: 10px;
        text-align: center;
        line-height: 20px;
        float: right;
        margin-right: 5px;
      }
      img {
        width: 80%;
        margin: 10px 0;
      }
      p {
        color: #666;
        font-weight: normal;
        font-size: 14px;
      }
    }
  }
}
// 秒杀样式结束

.shopitem {
  width: 49%;
  height: 20%;
  // border: 3px solid  #f7f8fa;
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
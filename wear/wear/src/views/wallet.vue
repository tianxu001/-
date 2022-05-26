<template>
  <div>
    <header class="header-box">
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
      <span>钱包</span>
    </header>
    <div class="box">
      <div>
        <img class="img1" src="../assets/img/dewuImage/ye.png" alt />
        <span class="span1">余额</span>
        <span class="span2">¥</span>
        <span class="span3">0.00</span>
        <img class="img2" src="../assets/img/dewuImage/right.png" alt />
      </div>
      <div>
        <img class="img1" src="../assets/img/dewuImage/yhq.png" alt />
        <span class="span1">优惠券</span>
        <span class="span3">0</span>
        <img class="img2" src="../assets/img/dewuImage/right.png" alt />
      </div>
      <div>
        <img class="img1" src="../assets/img/dewuImage/jt.png" alt />
        <span class="span1">津贴</span>
        <span class="span2">¥</span>
        <span class="span3">0.00</span>
        <img class="img2" src="../assets/img/dewuImage/right.png" alt />
      </div>
      <div>
        <img class="img1" src="../assets/img/dewuImage/ic_wallet_du_coin.png" alt />
        <span class="span1">得币</span>
        <span class="span3">0</span>
        <img class="img2" src="../assets/img/dewuImage/right.png" alt />
      </div>
      <div>
        <img class="img1" src="../assets/img/dewuImage/nm.png" alt />
        <span class="span1">柠檬</span>
        <span class="span3">0</span>
        <img class="img2" src="../assets/img/dewuImage/right.png" alt />
      </div>
      <div class="hb">
        <img class="img1" src="../assets/img/dewuImage/hb.png" alt />
        <span class="span1">红包</span>
        <span class="span2">¥</span>
        <span class="span3">0</span>
        <img class="img2" src="../assets/img/dewuImage/right.png" alt />
      </div>
      <div>
        <img class="img1" src="../assets/img/dewuImage/yhk.png" alt />
        <span class="span1">银行卡</span>
        <span class="span3">0</span>
        <img class="img2" src="../assets/img/dewuImage/right.png" alt />
      </div>
      <p>反馈与帮助</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
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
.box {
  background-color: #fafafc;
  height: 90.5vh;
  padding: 0.75rem;
  text-align: center;
  .hb {
    position: relative;
    .span2 {
      position: absolute;
      right: 4rem;
    }
  }
  div {
    background-color: #fff;
    height: 10vh;
    position: relative;
    border-radius: 2px;
    margin-bottom: 0.625rem;
    .img1 {
      width: 1.25rem;
      position: absolute;
      top: 35%;
      left: 1.5rem;
    }
    .span1 {
      position: absolute;
      top: 38%;
      left: 3.3rem;
      color: #000;
    }
    .span2 {
      position: absolute;
      color: #000;
      font-size: 0.75rem;
      right: 6.3rem;
      top: 32%;
      font-weight: 600;
    }
    .span3 {
      position: absolute;
      right: 40px;
      top: 30%;
      font-size: 25px;
      font-weight: 900;
    }
    .img2 {
      position: absolute;
      right: 1rem;
      width: 1.4rem;
      top: 32%;
    }
  }
}
p{
    margin: 1.5rem ;
    color: #55bdc0;
}
</style>